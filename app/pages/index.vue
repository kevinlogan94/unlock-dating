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
    <Footer />
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
