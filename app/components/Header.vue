<template>
  <header class="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
    <UContainer>
      <nav class="flex items-center justify-between py-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <Logo size="sm" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            to="/"
            class="text-gray-300 hover:text-white transition-colors font-medium"
            active-class="text-white"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="text-gray-300 hover:text-white transition-colors font-medium"
            active-class="text-white"
          >
            Blog
          </NuxtLink>
          <UButton
            to="https://calendly.com/kevin-unlock-dating/30min"
            target="_blank"
            size="sm"
            color="primary"
            variant="solid"
            trailing-icon="i-lucide-calendar"
          >
            Book a Call
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <UButton
          class="md:hidden"
          color="neutral"
          variant="ghost"
          :icon="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        />
      </nav>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-4">
          <NuxtLink
            to="/"
            class="block text-gray-300 hover:text-white transition-colors font-medium"
            active-class="text-white"
            @click="mobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="block text-gray-300 hover:text-white transition-colors font-medium"
            active-class="text-white"
            @click="mobileMenuOpen = false"
          >
            Blog
          </NuxtLink>
          <UButton
            to="https://calendly.com/kevin-unlock-dating/30min"
            target="_blank"
            size="sm"
            color="primary"
            variant="solid"
            trailing-icon="i-lucide-calendar"
            class="w-full"
            @click="mobileMenuOpen = false"
          >
            Book a Call
          </UButton>
        </div>
      </Transition>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

