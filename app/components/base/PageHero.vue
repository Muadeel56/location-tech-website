<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <section class="relative overflow-hidden bg-brand-dark circuit-bg pt-32 pb-16">
    <div class="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark" />
    <div class="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <nav class="mb-6 text-sm text-brand-gray">
        <NuxtLink to="/" class="transition-colors hover:text-white">
          Home
        </NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-brand-cyan">{{ title }}</span>
      </nav>
      <h1 class="mb-4 font-syne text-5xl font-bold text-white md:text-6xl">
        <span class="gradient-text">{{ title }}</span>
      </h1>
      <p class="mx-auto max-w-2xl text-lg text-brand-gray md:text-xl">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
