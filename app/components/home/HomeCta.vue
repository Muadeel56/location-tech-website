<template>
  <section id="contact" class="overflow-hidden py-16 min-[400px]:py-24">
    <div class="mx-auto max-w-[1240px] px-4 min-[400px]:px-5 sm:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 26 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        :visible-once="true"
        class="relative overflow-hidden rounded-2xl gradient-bg px-5 py-12 text-center shadow-[0_40px_90px_-40px_rgba(0,180,216,0.6)] min-[400px]:rounded-[30px] min-[400px]:px-8 min-[400px]:py-16 md:px-16 md:py-[70px]"
      >
        <div
          class="pointer-events-none absolute inset-0 opacity-[0.18]"
          style="background-image: radial-gradient(rgba(10,22,40,0.5) 1.5px, transparent 1.5px); background-size: 30px 30px;"
          aria-hidden="true"
        />

        <h2 class="relative font-syne text-[clamp(2.125rem,4.4vw,3.5rem)] font-extrabold leading-[1.05] text-[#04121C]">
          Ready to map your future?
        </h2>

        <p class="relative mx-auto mt-4 mb-7 max-w-[560px] text-base text-[rgba(4,18,28,0.78)] min-[400px]:mt-[18px] min-[400px]:mb-9 min-[400px]:text-[19px]">
          Let's build the location intelligence that moves your operations forward. Talk to our team today.
        </p>

        <BaseButton
          variant="dark"
          to="/contact"
          icon="mdi:arrow-right"
          class="relative"
        >
          Contact Us Today
        </BaseButton>
      </div>
    </div>
  </section>
</template>
