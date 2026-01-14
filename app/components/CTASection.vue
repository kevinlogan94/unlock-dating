<template>
  <section class="relative py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=1920&q=80"
        alt="Success"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-primary-950/90 to-gray-950/95" />
    </div>

    <!-- Animated gradient overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-amber-500/20 to-primary-500/30 animate-pulse" />
    </div>

    <!-- Content -->
    <UContainer class="relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Headline -->
        <h2 class="text-5xl md:text-6xl font-black leading-tight">
          <span class="block text-white">Ready to Unlock</span>
          <span class="block text-gradient">Your Full Potential?</span>
        </h2>

        <!-- Subtext -->
        <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Limited coaching spots available.
          <span class="text-white font-bold">Take action now</span> and start your transformation today.
        </p>

        <!-- Stats/Social Proof -->
        <div class="flex flex-wrap justify-center gap-8 py-8">
          <div class="text-center">
            <div class="text-4xl font-black text-gradient">
              60
            </div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">
              Days to Transform
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-black text-gradient">
              1-on-1
            </div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">
              Personal Coaching
            </div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-black text-gradient">
              100%
            </div>
            <div class="text-sm text-gray-400 uppercase tracking-wide">
              Results Focused
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="pt-4">
          <UButton
            :to="`mailto:kevinmlogan7@gmail.com?subject=Unlock Coaching - Book Free Consultation&body=Hi Kevin,%0D%0A%0D%0AI'm interested in learning more about your dating coaching program.%0D%0A%0D%0ACurrent situation:%0D%0A[Tell me about where you are now]%0D%0A%0D%0AGoals:%0D%0A[Tell me what you want to achieve]%0D%0A%0D%0AThanks!`"
            size="xl"
            color="primary"
            variant="solid"
            class="text-lg px-16 py-5 font-bold shadow-2xl shadow-primary-500/50 hover:shadow-primary-500/70 transition-all duration-300 hover:scale-105"
            trailing-icon="i-lucide-mail"
          >
            Book Your Free Consultation
          </UButton>
        </div>

        <!-- Urgency message -->
        <div class="pt-4">
          <p class="text-sm text-amber-500 font-semibold uppercase tracking-wide animate-pulse">
            ⚡ Limited Spots Available This Month
          </p>
        </div>

        <!-- Trust indicators -->
        <div class="pt-8 space-y-4">
          <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary-500" />
              <span>No Commitment Required</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary-500" />
              <span>Free Initial Consultation</span>
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary-500" />
              <span>Personalized Approach</span>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
</script>

