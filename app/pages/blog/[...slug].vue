<template>
  <div class="min-h-screen bg-gray-950">
    <UContainer class="py-12">
      <article v-if="page" class="max-w-4xl mx-auto">
        <!-- Back Link -->
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <UIcon name="i-lucide-arrow-left" class="w-4 h-4" />
          <span>Back to Blog</span>
        </NuxtLink>

        <!-- Article Header -->
        <header class="mb-12 space-y-6">
          <!-- Meta Info -->
          <div class="flex items-center gap-3 text-sm text-gray-400">
            <span>{{ formatDate(page.date) }}</span>
            <span v-if="page.minRead">•</span>
            <span v-if="page.minRead">{{ page.minRead }} min read</span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl font-black text-white leading-tight">
            {{ page.title }}
          </h1>

          <!-- Description -->
          <p class="text-xl text-gray-300">
            {{ page.description }}
          </p>

          <!-- Hero Image -->
          <div class="aspect-video overflow-hidden rounded-2xl">
            <img
              :src="page.image"
              :alt="page.title"
              class="w-full h-full object-cover"
            >
          </div>

          <!-- Author -->
          <div v-if="page.author" class="flex items-center gap-4 pt-4">
            <img
              v-if="page.author.avatar"
              :src="page.author.avatar.src"
              :alt="page.author.avatar.alt"
              class="w-12 h-12 rounded-full object-cover"
            >
            <div>
              <p class="text-white font-semibold">{{ page.author.name }}</p>
              <p class="text-sm text-gray-400">Dating Coach</p>
            </div>
          </div>
        </header>

        <!-- Article Content -->
        <div class="mb-16">
          <ContentRenderer
            v-if="page.body"
            :value="page"
          />
        </div>

        <!-- CTA Section -->
        <div class="bg-gradient-to-br from-primary-900/30 to-amber-900/30 rounded-2xl p-8 md:p-12 border border-primary-500/20 mb-16">
          <div class="text-center space-y-6">
            <h2 class="text-3xl md:text-4xl font-black text-white">
              Ready to Transform Your Dating Life?
            </h2>
            <p class="text-lg text-gray-300 max-w-2xl mx-auto">
              If this article resonated with you, imagine what we could accomplish working together. 
              Book a free consultation and let's create your personalized transformation plan.
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
            <p class="text-sm text-gray-400">
              Limited coaching spots available this month
            </p>
          </div>
        </div>

        <!-- Continue Reading Navigation -->
        <UContentSurround :surround />
      </article>
    </UContainer>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// Remove trailing slash from path for consistent querying
const normalizedPath = route.path.replace(/\/$/, '') || route.path

// Fetch blog post
const { data: page } = await useAsyncData(normalizedPath, () =>
  queryCollection('blog').path(normalizedPath).first()
)

if (!page.value) {
  throw createError({ 
    statusCode: 404, 
    statusMessage: 'Page not found', 
    fatal: true 
  })
}

// Fetch surrounding posts for navigation
const { data: surround } = await useAsyncData(`${normalizedPath}-surround`, () =>
  queryCollectionItemSurroundings('blog', normalizedPath, {
    fields: ['description']
  })
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
const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description
// Ensure canonical URL has trailing slash to match redirect behavior
const canonicalPath = normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`
const canonicalUrl = `https://unlock-dating.com${canonicalPath}`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: page.value?.image,
  ogType: 'article',
  articlePublishedTime: page.value?.date,
  articleAuthor: page.value?.author?.name
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ]
})
</script>

