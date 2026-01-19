<template>
  <div class="min-h-screen bg-gray-950">
    <UContainer class="py-24">
      <div v-if="page" class="max-w-6xl mx-auto">
        <!-- Hero Section with Image -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <!-- Text Content -->
          <div class="space-y-6">
            <h1 class="text-5xl md:text-6xl font-black leading-tight">
              <span class="text-white">{{ page.title }}</span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              {{ page.description }}
            </p>
          </div>

          <!-- Profile Image -->
          <div class="flex justify-center md:justify-end">
            <div class="relative">
              <img
                src="https://swdrcvirhtbxlooklceu.supabase.co/storage/v1/object/public/images/profile_headshot.jpg"
                alt="Kevin - Dating Coach"
                class="w-80 h-80 rounded-2xl object-cover shadow-2xl ring-4 ring-primary-500/20 transform rotate-3 hover:rotate-0 transition-transform duration-300"
              >
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="prose prose-invert prose-lg max-w-none mb-16">
          <div class="text-gray-300 leading-relaxed space-y-6">
            <MDC
              v-if="page.content"
              :value="page.content"
              unwrap="p"
            />
          </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-gradient-to-br from-primary-900/30 to-amber-900/30 rounded-2xl p-8 md:p-12 border border-primary-500/20 text-center">
          <h2 class="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Work Together?
          </h2>
          <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
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
        </div>
      </div>
    </UContainer>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Fetch about page content
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('pages').path('/about').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
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

