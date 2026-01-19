<template>
  <div class="min-h-screen bg-gray-950">
    <!-- Hero Section -->
    <section class="py-24 bg-gray-900/50">
      <UContainer>
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-black mb-6">
            <span class="text-white">Dating Advice & </span>
            <span class="text-gradient">Transformation Tips</span>
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            {{ page?.description }}
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16">
      <UContainer>
        <div class="max-w-6xl mx-auto">
          <div v-if="posts && posts.length > 0" class="grid md:grid-cols-2 gap-8">
            <NuxtLink
              v-for="post in posts"
              :key="post.path"
              :to="post.path"
              class="group"
            >
              <UCard class="h-full bg-gray-800/50 backdrop-blur border-gray-700 hover:border-primary-500 transition-all duration-300 hover:scale-105 overflow-hidden">
                <!-- Image -->
                <div class="aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    :src="post.image"
                    :alt="post.title"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  >
                </div>

                <!-- Content -->
                <div class="space-y-3">
                  <!-- Meta -->
                  <div class="flex items-center gap-3 text-sm text-gray-400">
                    <span>{{ formatDate(post.date) }}</span>
                    <span v-if="post.minRead">•</span>
                    <span v-if="post.minRead">{{ post.minRead }} min read</span>
                  </div>

                  <!-- Title -->
                  <h2 class="text-2xl font-bold text-white group-hover:text-gradient transition-colors">
                    {{ post.title }}
                  </h2>

                  <!-- Description -->
                  <p class="text-gray-400 line-clamp-3">
                    {{ post.description }}
                  </p>

                  <!-- Read More -->
                  <div class="flex items-center gap-2 text-primary-500 font-semibold">
                    <span>Read More</span>
                    <UIcon name="i-lucide-arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </UCard>
            </NuxtLink>
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-16">
            <p class="text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gray-900/50">
      <UContainer>
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <h2 class="text-4xl md:text-5xl font-black">
            <span class="text-white">Ready to Transform </span>
            <span class="text-gradient">Your Dating Life?</span>
          </h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Stop reading and start doing. Book a free consultation and let's create your personalized transformation plan.
          </p>
          <UButton
            to="https://calendly.com/kevin-unlock-dating/30min"
            target="_blank"
            size="xl"
            color="primary"
            variant="solid"
            class="text-lg px-12 py-4 font-bold shadow-2xl shadow-primary-500/50 hover:shadow-primary-500/70 transition-all duration-300 hover:scale-105"
            trailing-icon="i-lucide-calendar"
          >
            Book Your Free Consultation
          </UButton>
        </div>
      </UContainer>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Fetch page metadata
const { data: page } = await useAsyncData('blog-page', () => {
  return queryCollection('pages').path('/blog').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

// Fetch all blog posts
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

// Format date helper
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO
useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description,
  ogType: 'website'
})
</script>

