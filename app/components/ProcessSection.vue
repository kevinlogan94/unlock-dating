<template>
  <section class="py-24 bg-gray-900/50">
    <UContainer>
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-4">
            <span class="text-gradient">How It Works</span>
          </h2>
          <p class="text-xl text-gray-400">
            A proven 3-step framework to transform your dating life
          </p>
        </div>

        <!-- Process Steps -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <UCard class="bg-gray-800/50 backdrop-blur border-gray-700 hover:border-primary-500 transition-all duration-300 hover:scale-105">
            <div class="space-y-4">
              <!-- Step Number -->
              <div class="flex items-center justify-between">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <span class="text-3xl font-black text-white">1</span>
                </div>
                <UIcon name="i-lucide-lightbulb" class="w-12 h-12 text-primary-500 opacity-50" />
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white">
                Unlock Your Mindset
              </h3>
              <p class="text-gray-400 leading-relaxed">
                Break through limiting beliefs and build unshakeable confidence.
                Transform your self-image and develop the mindset of a high-value man.
              </p>
            </div>
          </UCard>

          <!-- Step 2 -->
          <UCard class="bg-gray-800/50 backdrop-blur border-gray-700 hover:border-amber-500 transition-all duration-300 hover:scale-105">
            <div class="space-y-4">
              <!-- Step Number -->
              <div class="flex items-center justify-between">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <span class="text-3xl font-black text-white">2</span>
                </div>
                <UIcon name="i-lucide-message-circle" class="w-12 h-12 text-amber-500 opacity-50" />
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white">
                Master The Approach
              </h3>
              <p class="text-gray-400 leading-relaxed">
                Learn proven conversation strategies and social dynamics.
                Develop authentic charisma that naturally attracts high-value women.
              </p>
            </div>
          </UCard>

          <!-- Step 3 -->
          <UCard class="bg-gray-800/50 backdrop-blur border-gray-700 hover:border-primary-500 transition-all duration-300 hover:scale-105">
            <div class="space-y-4">
              <!-- Step Number -->
              <div class="flex items-center justify-between">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-amber-500 flex items-center justify-center">
                  <span class="text-3xl font-black text-white">3</span>
                </div>
                <UIcon name="i-lucide-trophy" class="w-12 h-12 text-primary-500 opacity-50" />
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white">
                Create Results
              </h3>
              <p class="text-gray-400 leading-relaxed">
                Start dating multiple high-value women consistently.
                Build a dating life you're proud of with real, measurable results.
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
</script>

