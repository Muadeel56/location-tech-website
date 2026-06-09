<script setup lang="ts">
type Variant = 'light' | 'glass' | 'dark'

withDefaults(
  defineProps<{
    variant?: Variant
  }>(),
  {
    variant: 'light',
  },
)

const baseClasses = 'rounded-2xl p-6 transition-all duration-300'

const variantClasses: Record<Variant, string> = {
  light: 'bg-white shadow-sm border border-slate-100 hover:shadow-lg hover:border-brand-cyan/30',
  glass: 'glass hover:border-brand-cyan/50 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)]',
  dark: 'bg-brand-dark/60 border border-white/10 hover:border-brand-cyan/40',
}
</script>

<template>
  <div
    v-bind="$attrs"
    :class="[baseClasses, variantClasses[variant], 'group']"
  >
    <slot />
  </div>
</template>
