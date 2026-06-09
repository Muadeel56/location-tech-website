<script setup lang="ts">
import { NuxtLink } from '#components'

defineOptions({ inheritAttrs: false })

type Variant = 'primary' | 'ghost' | 'dark'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    to?: string
    icon?: string
  }>(),
  {
    variant: 'primary',
  },
)

const baseClasses = `
  inline-flex items-center justify-center
  px-6 py-3 rounded-full font-dm font-semibold
  text-sm tracking-wide transition-all duration-300
  focus:outline-none focus:ring-2 focus:ring-brand-cyan/50
`

const variantClasses: Record<Variant, string> = {
  primary: 'gradient-bg text-white shadow-lg hover:shadow-brand-cyan/30 hover:scale-105',
  ghost: 'border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white',
  dark: 'bg-brand-dark text-white border border-white/10 hover:border-brand-cyan/50',
}

const classes = computed(() => [baseClasses, variantClasses[props.variant]])
</script>

<template>
  <component
    :is="to ? NuxtLink : 'button'"
    v-bind="to ? { ...$attrs, to } : $attrs"
    :class="classes"
  >
    <slot />
    <Icon v-if="icon" :name="icon" class="ml-2 h-4 w-4" />
  </component>
</template>
