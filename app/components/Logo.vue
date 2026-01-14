<template>
  <div class="flex items-center gap-2">
    <!-- Icon: Key unlocking -->
    <svg
      v-if="showIcon"
      :class="iconSize"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Key body -->
      <path
        d="M28 12C28 15.866 24.866 19 21 19C17.134 19 14 15.866 14 12C14 8.13401 17.134 5 21 5C24.866 5 28 8.13401 28 12Z"
        :stroke="iconColor"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <!-- Key teeth -->
      <path
        d="M14.5 17L6 25.5M6 25.5L6 30M6 25.5L10.5 25.5"
        :stroke="iconColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <!-- Sparkle effect -->
      <path
        d="M32 8L33 10L35 11L33 12L32 14L31 12L29 11L31 10L32 8Z"
        :fill="accentColor"
        class="animate-pulse"
      />
    </svg>

    <!-- Text -->
    <span
      v-if="showText"
      :class="textSize"
      class="font-black tracking-tight"
    >
      <span class="text-gradient">UNLOCK</span>
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'full' | 'icon' | 'text'
  iconColor?: string
  accentColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'full',
  iconColor: '#0ea5e9',
  accentColor: '#f59e0b'
})

const showIcon = computed(() => props.variant === 'full' || props.variant === 'icon')
const showText = computed(() => props.variant === 'full' || props.variant === 'text')

const iconSize = computed(() => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }
  return sizes[props.size]
})

const textSize = computed(() => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  }
  return sizes[props.size]
})
</script>

