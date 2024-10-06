<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-vue-next";
import { projects } from "~/data/projects.js";
</script>

<template>
  <section
    id="projects"
    class="py-10 px-8 md:py-12 md:px-12 lg:py-16 lg:px-16 text-slate-300"
  >
    <div class="mx-auto max-w-7xl">
      <h2
        class="flex justify-center items-center mb-8 font-bold text-center md:mb-12 md:text-2xl lg:text-3xl"
      >
        <span class="mr-2 text-teal-300">03.</span> Projects
      </h2>

      <div class="space-y-12">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="flex flex-col gap-4 justify-between items-center lg:flex-row lg:gap-12"
        >
          <div class="w-full lg:w-1/2">
            <Carousel class="w-full">
              <CarouselContent>
                <CarouselItem
                  v-for="(image, imageIndex) in project.images"
                  :key="imageIndex"
                >
                  <img
                    :src="image.src"
                    :alt="image.alt"
                    class="object-contain w-full h-auto rounded-lg"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div class="w-full lg:w-1/2">
            <h3 class="mb-2 text-lg font-bold lg:text-xl">
              {{ project.title }}
            </h3>
            <p class="mb-4">{{ project.description }}</p>
            <h4 class="mb-2 text-base font-semibold">Features:</h4>
            <ul class="pl-4 mb-4 space-y-2 list-disc">
              <li
                v-for="(feature, featureIndex) in project.features"
                :key="featureIndex"
              >
                {{ feature }}
              </li>
            </ul>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tag, tagIndex) in project.tags"
                :key="tagIndex"
                class="px-2 py-1 text-sm bg-teal-900 text-teal-300 rounded"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex gap-2 items-center">
              <Button
                variant="ghost"
                size="icon"
                :href="project.githubLink"
                target="_blank"
              >
                <Github class="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                :href="project.liveLink"
                target="_blank"
                :disabled="!project.hasLiveLink"
              >
                <ExternalLink class="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
