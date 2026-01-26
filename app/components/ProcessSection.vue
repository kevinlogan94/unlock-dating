<template>
  <section class="py-24 bg-gray-900/50">
    <UContainer>
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-4">
            <span class="text-gradient">How It Works</span>
          </h2>
          <p class="text-xl text-gray-400">
            A proven 6-step framework to transform your dating life
          </p>
        </div>

        <!-- Process Steps -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Step 1: Becoming Attractive -->
          <UCard class="bg-gray-800/50 backdrop-blur border-gray-700 hover:border-primary-500 transition-all duration-300 hover:scale-105">
            <div class="space-y-4">
              <!-- Step Number -->
              <div class="flex items-center justify-between">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <span class="text-3xl font-black text-white">1</span>
                </div>
                <UIcon name="i-lucide-user-check" class="w-12 h-12 text-primary-500 opacity-50" />
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white">
                Becoming Attractive
              </h3>
              <p class="text-gray-400 leading-relaxed">
                We'll assess your current state and provide personalized guidance to help you become physically and mentally attractive. Transform your appearance, mindset, and energy.
              </p>
            </div>
          </UCard>

          <!-- Step 2: Building Your Dating Profile -->
          <UCard class="bg-gray-800/50 backdrop-blur border-gray-700 hover:border-amber-500 transition-all duration-300 hover:scale-105">
            <div class="space-y-4">
              <!-- Step Number -->
              <div class="flex items-center justify-between">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <span class="text-3xl font-black text-white">2</span>
                </div>
                <UIcon name="i-lucide-smartphone" class="w-12 h-12 text-amber-500 opacity-50" />
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white">
                Building Your Dating Profile
              </h3>
              <p class="text-gray-400 leading-relaxed">
                Learn how to position yourself as high-value. We'll help you market yourself to your target audience with photos, bio, and prompts that get results.
              </p>
            </div>
          </UCard>

          <!-- Step 3: Mastering First Dates -->
          <UCard class="bg-gray-800/50 backdrop-blur border-gray-700 hover:border-primary-500 transition-all duration-300 hover:scale-105">
            <div class="space-y-4">
              <!-- Step Number -->
              <div class="flex items-center justify-between">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <span class="text-3xl font-black text-white">3</span>
                </div>
                <UIcon name="i-lucide-calendar-check" class="w-12 h-12 text-primary-500 opacity-50" />
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white">
                Mastering First Dates
              </h3>
              <p class="text-gray-400 leading-relaxed">
                Discover how to plan engaging first dates, create chemistry, and confidently convert them into second dates or intimate encounters.
              </p>
            </div>
          </UCard>

          <!-- Step 4: Keeping Things Steady -->
          <UCard class="bg-gray-800/50 backdrop-blur border-gray-700 hover:border-amber-500 transition-all duration-300 hover:scale-105">
            <div class="space-y-4">
              <!-- Step Number -->
              <div class="flex items-center justify-between">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <span class="text-3xl font-black text-white">4</span>
                </div>
                <UIcon name="i-lucide-trending-up" class="w-12 h-12 text-amber-500 opacity-50" />
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white">
                Keeping Things Steady
              </h3>
              <p class="text-gray-400 leading-relaxed">
                Navigate the crucial early dating phase (dates 2-3+). Learn the perfect balance of pursuit and pull-back based on her attraction levels.
              </p>
            </div>
          </UCard>

          <!-- Step 5: Becoming a Boyfriend -->
          <UCard class="bg-gray-800/50 backdrop-blur border-gray-700 hover:border-primary-500 transition-all duration-300 hover:scale-105">
            <div class="space-y-4">
              <!-- Step Number -->
              <div class="flex items-center justify-between">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <span class="text-3xl font-black text-white">5</span>
                </div>
                <UIcon name="i-lucide-heart-handshake" class="w-12 h-12 text-primary-500 opacity-50" />
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white">
                Becoming a Boyfriend
              </h3>
              <p class="text-gray-400 leading-relaxed">
                Understand when and how to transition to exclusivity. Master the do's and don'ts of becoming a boyfriend without killing attraction.
              </p>
            </div>
          </UCard>

          <!-- Step 6: Long-Term Relationship & Marriage -->
          <UCard class="bg-gray-800/50 backdrop-blur border-gray-700 hover:border-amber-500 transition-all duration-300 hover:scale-105">
            <div class="space-y-4">
              <!-- Step Number -->
              <div class="flex items-center justify-between">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-primary-500 flex items-center justify-center">
                  <span class="text-3xl font-black text-white">6</span>
                </div>
                <UIcon name="i-lucide-gem" class="w-12 h-12 text-amber-500 opacity-50" />
              </div>

              <!-- Content -->
              <h3 class="text-2xl font-bold text-white">
                Long-Term Relationship & Marriage
              </h3>
              <p class="text-gray-400 leading-relaxed">
                Learn how to cohabitate successfully while maintaining high attraction. Master the hardest part: keeping the spark alive long-term.
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
