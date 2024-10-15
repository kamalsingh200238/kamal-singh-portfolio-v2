<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import MainSection from "~/components/MainSection.vue";
import AboutSection from "~/components/AboutSection.vue";
import ExperienceSection from "~/components/ExperienceSection.vue";
import ProjectSection from "~/components/ProjectSection.vue";
import ContactSection from "~/components/ContactSection.vue";
useHead({
  title: "Kamal Singh",
  link: [{ rel: "icon", type: "image/svg+xml", href: "/main-logo.svg" }],
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
