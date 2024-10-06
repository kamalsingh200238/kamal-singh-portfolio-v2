<script setup lang="ts">
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Button } from "~/components/ui/button";
</script>

<template>
  <section
    class="py-16 px-8 md:py-24 md:px-12 lg:py-32 lg:px-16 text-slate-300"
  >
    <div class="flex justify-center items-center">
      <div class="max-w-3xl text-center">
        <p class="mb-6 text-xs text-teal-300 md:text-sm">Hi, my name is</p>
        <h1 class="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          Kamal Singh
        </h1>

        <p
          class="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl text-slate-500"
        >
          I build things for the web
        </p>

        <p class="mx-auto mb-12 max-w-xl">
          I'm a software engineer specializing in building beautiful, accessible
          websites that create seamless online experiences. I focus on clean
          design and usability, ensuring that every site I build works well for
          all users, on any device. Let's collaborate to bring your ideas to
          life!
        </p>

        <nav
          class="flex flex-col gap-6 justify-center mb-12 md:flex-row md:gap-8"
        >
          <Button as="a" variant="outline" href="#about">Learn More</Button>
          <Button as="a" variant="outline" href="/resume.pdf" pill
            >Resume</Button
          >
        </nav>

        <ul class="flex gap-10 justify-center">
          <li>
            <Button as="a" variant="outline" size="icon">
              <FontAwesomeIcon :icon="faGithub" />
            </Button>
          </li>
          <li>
            <Button as="a" variant="outline" size="icon">
              <FontAwesomeIcon :icon="faXTwitter" />
            </Button>
          </li>
          <li>
            <Button as="a" variant="outline" size="icon">
              <FontAwesomeIcon :icon="faEnvelope" />
            </Button>
          </li>
          <li>
            <Button as="a" variant="outline" size="icon">
              <FontAwesomeIcon :icon="faLinkedin" />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
