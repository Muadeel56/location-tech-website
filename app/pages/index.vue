<template>
  <div>
    <div class="mx-auto max-w-6xl space-y-6 px-6 py-10">
      <h1 class="font-syne text-3xl font-bold text-brand-dark">Home</h1>
      <HomeHero />
      <HomeServices />
      <HomeWhyUs />
      <HomeStats />
      <HomeCta />
    </div>

    <!-- TEMP: Phase 3 base component showcase — remove after verification -->
    <section class="space-y-16 border-t border-dashed border-brand-gray/30 pt-16">
      <div class="mx-auto max-w-6xl space-y-8 px-6">
        <h2 class="font-syne text-2xl font-bold text-brand-dark">BaseButton</h2>
        <div class="flex flex-wrap items-center gap-4">
          <BaseButton>Primary</BaseButton>
          <BaseButton variant="ghost">Ghost</BaseButton>
          <BaseButton variant="dark">Dark</BaseButton>
          <BaseButton to="/contact" icon="mdi:arrow-right">Contact Us</BaseButton>
        </div>
      </div>

      <div class="mx-auto max-w-6xl space-y-8 px-6">
        <h2 class="font-syne text-2xl font-bold text-brand-dark">BaseSectionHeader</h2>
        <BaseSectionHeader
          eyebrow="Our Services"
          title="What We Offer"
          subtitle="End-to-end GIS and location intelligence solutions for modern businesses."
        />
        <BaseSectionHeader
          eyebrow="Why Choose Us"
          title="Built for Precision"
          subtitle="We combine deep geospatial expertise with cutting-edge technology."
          centered
        />
      </div>

      <div class="mx-auto max-w-6xl space-y-8 px-6">
        <h2 class="font-syne text-2xl font-bold text-brand-dark">BaseCard</h2>
        <BaseCard variant="light">
          <p class="font-syne font-semibold text-brand-dark">Light Card</p>
          <p class="mt-2 text-sm text-brand-gray">Default light variant with hover shadow.</p>
        </BaseCard>
        <div class="rounded-xl bg-brand-dark p-8">
          <div class="grid gap-6 sm:grid-cols-2">
            <BaseCard variant="glass">
              <p class="font-syne font-semibold text-white">Glass Card</p>
              <p class="mt-2 text-sm text-brand-gray">Glass morphism on dark background.</p>
            </BaseCard>
            <BaseCard variant="dark">
              <p class="font-syne font-semibold text-white">Dark Card</p>
              <p class="mt-2 text-sm text-brand-gray">Dark variant with cyan hover border.</p>
            </BaseCard>
          </div>
        </div>
      </div>

      <div>
        <h2 class="mx-auto mb-8 max-w-6xl px-6 font-syne text-2xl font-bold text-brand-dark">PageHero</h2>
        <PageHero
          title="About Us"
          subtitle="Learn about our mission and team."
        />
      </div>
    </section>
  </div>
</template>
