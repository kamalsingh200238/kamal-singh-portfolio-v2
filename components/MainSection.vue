<script setup lang="ts">
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Button } from "~/components/ui/button";
</script>

<template>
  <section
    class="py-16 px-8 md:py-24 md:px-12 lg:py-32 lg:px-16 text-slate-300 mt-2 lg:mt-2"
  >
    <div class="flex justify-center items-center">
      <div class="max-w-3xl text-center">
        <p class="mb-6 text-xs text-teal-300 md:text-sm">Hi, my name is</p>
        <h1 class="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          Kamal Singh
        </h1>

        <p
          class="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl text-slate-400"
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
          <Button
            as="a"
            href="/kamal-resume.pdf"
            download="kamal-singh-resume.pdf"
            >Resume</Button
          >
        </nav>

        <ul class="flex gap-10 justify-center">
          <li>
            <Button
              as="a"
              variant="icon"
              size="icon"
              href="https://github.com/kamalsingh200238"
            >
              <FontAwesomeIcon :icon="faGithub" size="2xl" />
            </Button>
          </li>
          <li>
            <Button
              as="a"
              variant="icon"
              size="icon"
              href="https://twitter.com/Kamalsingh1605"
            >
              <FontAwesomeIcon :icon="faXTwitter" size="2xl" />
            </Button>
          </li>
          <li>
            <Button
              as="a"
              variant="icon"
              size="icon"
              href="mailto:kamalsingh200238@gmail.com"
            >
              <FontAwesomeIcon :icon="faEnvelope" size="2xl" />
            </Button>
          </li>
          <li>
            <Button
              as="a"
              variant="icon"
              size="icon"
              href="https://www.linkedin.com/in/kamal--singh/"
            >
              <FontAwesomeIcon :icon="faLinkedin" size="2xl" />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
