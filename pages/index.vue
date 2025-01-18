<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import MainSection from "~/components/MainSection.vue";
import AboutSection from "~/components/AboutSection.vue";
import ExperienceSection from "~/components/ExperienceSection.vue";
import ProjectSection from "~/components/ProjectSection.vue";
import ContactSection from "~/components/ContactSection.vue";
import { onMounted } from "vue";
import { animate, inView, stagger } from "motion";
import SplitType from "split-type";

useHead({
  title: "Kamal Singh",
  link: [{ rel: "icon", type: "image/svg+xml", href: "/main-logo.svg" }],
});

onMounted(() => {
  const heading = new SplitType(".word-animation", { types: "words" });
  const paragraph = new SplitType(".line-animation", { types: "lines" });

  if (heading.words && paragraph.lines) {
    const mainSectionText = [...heading.words, ...paragraph.lines];
    animate([
      [
        mainSectionText,
        { y: [24, 0], opacity: [0, 1] },
        { duration: 0.3, delay: stagger(0.05) },
      ],
      [
        ".stagger-animation",
        { y: [24, 0], opacity: [0, 1] },
        { duration: 0.3, delay: stagger(0.05) },
      ],
    ]);
  }

  inView(
    ".section-fade-animation",
    (info) => {
      animate(info.target, { y: [24, 0], opacity: [0, 1] }, { duration: 0.5 });
    },
    { margin: "-200px" },
  );
});
</script>

<template>
  <main>
    <Navbar />
    <MainSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectSection />
    <ContactSection />
  </main>
  <footer class="text-xs text-foreground text-center mt-6">
    <p>Designed inspired for Brittany Chiangs's portfolio</p>
    <p>Made by Kamal Singh</p>
  </footer>
</template>
