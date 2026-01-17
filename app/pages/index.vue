<template>
  <div class="min-h-screen bg-gray-950">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Process Section -->
    <ProcessSection />

    <!-- Benefits Section -->
    <BenefitsSection />

    <!-- Final CTA Section -->
    <CTASection />

    <!-- Footer -->
    <footer class="bg-gray-950 border-t border-gray-800 py-12">
      <UContainer>
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-center gap-6">
            <!-- Logo -->
            <div>
              <Logo size="md" />
            </div>

            <!-- Contact -->
            <div class="text-center md:text-right">
              <p class="text-gray-400 mb-2">
                Ready to transform your dating life?
              </p>
              <a
                href="mailto:kevin@unlock-dating.com"
                class="text-primary-500 hover:text-primary-400 font-semibold transition-colors"
              >
                kevin@unlock-dating.com
              </a>
            </div>
          </div>

          <!-- Copyright -->
          <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; {{ new Date().getFullYear() }} Unlock Dating Coaching. All rights reserved.</p>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'Unlock - Transform Your Dating Life in 60 Days',
  meta: [
    {
      name: 'description',
      content: 'Go from no dates to dating multiple high-value women in 60 days or less. Expert dating coaching for men who want real results.'
    },
    {
      property: 'og:title',
      content: 'Unlock - Transform Your Dating Life in 60 Days'
    },
    {
      property: 'og:description',
      content: 'Go from no dates to dating multiple high-value women in 60 days or less. Expert dating coaching for men who want real results.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>
