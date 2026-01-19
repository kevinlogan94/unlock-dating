<script setup>
const colorMode = useColorMode()

// Force dark mode
colorMode.preference = 'dark'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'alternate icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'dark'
  },
  bodyAttrs: {
    class: 'bg-gray-950'
  }
})
</script>

<template>
  <UApp>
    <Header />
    <NuxtPage />
  </UApp>
</template>
