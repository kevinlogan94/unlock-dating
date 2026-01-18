<template>
  <section class="relative overflow-hidden bg-gray-950">
    <!-- Animated gradient background -->
    <div class="absolute inset-0 z-0 opacity-20">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-transparent to-amber-500/30" />
    </div>

    <!-- Content -->
    <UContainer class="relative z-10 py-24 md:py-32">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Logo -->
        <div class="flex justify-center mb-8">
          <Logo size="xl" />
        </div>

        <!-- Headline -->
        <h1 class="text-5xl md:text-7xl font-black leading-tight">
          <span class="block text-white">Unlock Your</span>
          <span class="block text-gradient">Dating Potential</span>
        </h1>

        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Go from <span class="text-white font-bold">no dates</span> to dating
          <span class="text-gradient font-bold">multiple high-value women</span>
          in <span class="text-white font-bold">60 days or less</span>
        </p>

        <!-- CTA Button -->
        <div class="pt-8">
          <UButton
            to="https://calendly.com/kevin-unlock-dating/30min"
            target="_blank"
            size="xl"
            color="primary"
            variant="solid"
            class="text-lg px-12 py-4 font-bold shadow-2xl shadow-primary-500/50 hover:shadow-primary-500/70 transition-all duration-300 hover:scale-105"
            trailing-icon="i-lucide-calendar"
          >
            Schedule Your Free Call
          </UButton>
        </div>

        <!-- Social Proof Hint -->
        <p class="text-sm text-gray-400 pt-4">
          Join the men who've already unlocked their potential
        </p>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
</script>

