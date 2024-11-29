<script setup lang="ts">
import { Button } from '~/components/ui/button';
</script>

<template>
  <section
    id="contact"
    class="py-10 px-8 md:py-12 md:px-12 lg:py-16 lg:px-16 text-slate-300"
  >
    <div class="mx-auto max-w-5xl">
      <h2
        class="flex justify-center items-center mb-8 font-bold text-center md:mb-12 md:text-2xl lg:text-3xl"
      >
        <span class="mr-2 text-accent">04.</span> Get In Touch
      </h2>

      <p class="mb-6 text-center">
        If my portfolio has sparked your intrest and you'd like to work with me,
        do not hesitate to contact me. I would love to connect with you.
      </p>

      <div class="text-center">
        <Button
          as="a"
          href="mailto:kamalsingh200239@gmail.com"
        >
          Say Hello
        </Button>
      </div>
    </div>
  </section>
</template>
