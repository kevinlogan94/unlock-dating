<template>
  <footer class="bg-gray-950 border-t border-gray-800 py-12">
    <UContainer>
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <!-- Logo -->
          <div>
            <Logo size="md" />
          </div>

          <!-- Navigation Links -->
          <div class="flex gap-6 text-sm">
            <NuxtLink
              to="/"
              class="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="text-gray-400 hover:text-white transition-colors"
            >
              About
            </NuxtLink>
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
</template>

<script setup lang="ts">
</script>

