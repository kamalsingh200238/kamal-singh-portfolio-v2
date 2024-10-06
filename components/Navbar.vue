<script setup lang="ts">
import { ref } from "vue";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import MainLogo from "~/components/MainLogo.vue";
import { Menu } from "lucide-vue-next";
import { useWindowScroll } from "@vueuse/core";
import { cn } from "~/lib/utils/cn";

const isOpen = ref(false);
const { y } = useWindowScroll();

const closeMenu = () => {
  isOpen.value = false;
};

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

onMounted(() => {
  window.addEventListener("resize", closeMenu);
});

onUnmounted(() => {
  window.removeEventListener("resize", closeMenu);
});
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-background">
    <div
      :class="
        cn({
          'container flex items-center justify-between transition-all h-16 lg:h-20': true,
          'shadow-xl h-16': y !== 0,
        })
      "
    >
      <Button as="a" href="/" variant="icon" size="icon" class="w-10 h-12 lg:w-12 lg:h-12">
        <MainLogo />
      </Button>

      <!-- desktop nav -->
      <nav class="hidden md:flex space-x-4">
        <ul class="flex items-center gap-4">
          <li v-for="item in navItems" :key="item.name">
            <Button as="a" variant="link" :href="item.href">
              {{ item.name }}
            </Button>
          </li>
          <li>
            <Button as="a" href="/kamal-resume.pdf" download="kamal-singh-resume.pdf">
              Resume
            </Button>
          </li>
        </ul>
      </nav>

      <!-- mobile nav -->
      <Sheet v-model:open="isOpen">
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" class="md:hidden">
            <span class="sr-only">Toggle menu</span>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" class="w-72">
          <SheetTitle>Menu</SheetTitle>
          <nav class="flex flex-col gap-4 mt-10">
            <Button
              v-for="item in navItems"
              :key="item.name"
              as="a"
              variant="link"
              :href="item.href"
              @click="closeMenu"
            >
              {{ item.name }}
            </Button>
            <Button
              as="a"
              href="/kamal-resume.pdf"
              download="kamal-singh-resume.pdf"
              @click="closeMenu"
            >
              Resume
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>
</template>
