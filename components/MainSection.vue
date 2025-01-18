<script setup lang="ts">
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Button } from "~/components/ui/button";

const pageLoaded = ref(false);
onMounted(() => {
  pageLoaded.value = true;
});
</script>

<template>
  <section
    class="py-10 px-8 md:py-12 md:px-12 lg:py-16 lg:px-16 text-foreground min-h-screen flex items-center justify-center"
  >
    <div>
      <div class="max-w-3xl text-center">
        <p
          class="mb-6 text-xs text-accent md:text-sm font-bold line-animation"
          :class="{ 'opacity-0': !pageLoaded }"
        >
          Hi, my name is
        </p>
        <h1
          class="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
          :class="{ 'opacity-0': !pageLoaded }"
        >
          <span class="sr-only">Kamal Singh</span>
          <span class="word-animation" aria-hidden="true">Kamal Singh</span>
        </h1>

        <h2
          class="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl text-slate-400"
          :class="{ 'opacity-0': !pageLoaded }"
        >
          <span class="sr-only">I build things for the web</span>
          <span class="word-animation" aria-hidden="true">
            I build things for the web
          </span>
        </h2>

        <p
          class="mx-auto mb-12 max-w-xl line-animation"
          :class="{ 'opacity-0': !pageLoaded }"
        >
          <span class="sr-only">
            I'm a software engineer specializing in building beautiful,
            accessible websites that create seamless online experiences. I focus
            on clean design and usability, ensuring that every site I build
            works well for all users, on any device. Let's collaborate to bring
            your ideas to life!
          </span>
          <span class="line-animation" aria-hidden="true">
            I'm a software engineer specializing in building beautiful,
            accessible websites that create seamless online experiences. I focus
            on clean design and usability, ensuring that every site I build
            works well for all users, on any device. Let's collaborate to bring
            your ideas to life!
          </span>
        </p>

        <nav
          class="flex flex-col gap-6 justify-center mb-12 md:flex-row md:gap-8"
        >
          <Button
            as="a"
            variant="outline"
            href="#about"
            class="stagger-animation opacity-0"
            >Learn More</Button
          >
          <Button
            as="a"
            href="/kamal-resume.pdf"
            download="kamal-singh-resume.pdf"
            class="stagger-animation opacity-0"
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
              class="stagger-animation opacity-0"
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
              class="stagger-animation opacity-0"
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
              class="stagger-animation opacity-0"
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
              class="stagger-animation opacity-0"
            >
              <FontAwesomeIcon :icon="faLinkedin" size="2xl" />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
