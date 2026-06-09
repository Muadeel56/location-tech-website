<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title?: string
    subtitle?: string
    centered?: boolean
  }>(),
  {
    centered: false,
  },
)
</script>

<template>
  <div class="mb-12" :class="{ 'text-center': centered }">
    <span
      v-if="eyebrow"
      class="mb-3 block font-syne text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan"
    >
      {{ eyebrow }}
    </span>
    <h2>
      <slot>{{ title }}</slot>
    </h2>
    <p
      v-if="subtitle"
      class="mt-4 max-w-2xl text-lg text-brand-gray"
      :class="{ 'mx-auto': centered }"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
