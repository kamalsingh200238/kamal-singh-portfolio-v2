<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { projects } from "~/data/projects.js";
</script>

<template>
  <section
    id="projects"
    class="py-10 px-8 md:py-12 md:px-12 lg:py-16 lg:px-16 text-slate-300 scroll-m-16"
  >
    <div class="mx-auto max-w-7xl">
      <h2
        class="flex justify-center items-center mb-8 font-bold text-center md:mb-12 md:text-2xl lg:text-3xl"
      >
        <span class="mr-2 text-accent">03.</span> Projects
      </h2>

      <div class="space-y-12">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="flex flex-col gap-4 justify-between items-center lg:flex-row lg:gap-12"
        >
          <div class="w-full lg:w-1/2 px-12">
            <Carousel>
              <CarouselContent>
                <CarouselItem
                  v-for="(image, imageIndex) in project.images"
                  :key="imageIndex"
                >
                  <img
                    :src="image.src"
                    :alt="image.alt"
                    class="object-contain rounded-lg w-full aspect-video border border-teal-800"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div class="w-full lg:w-1/2">
            <h3 class="mb-2 text-lg font-bold lg:text-xl text-accent">
              {{ project.title }}
            </h3>
            <p class="mb-4">{{ project.description }}</p>
            <h4 class="mb-2 text-base font-semibold text-accent">
              Features:
            </h4>
            <ul class="pl-6 mb-4 space-y-2 list-disc">
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
                class="px-2 py-1 text-sm bg-teal-800/40 text-teal-200 rounded"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex gap-2 items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button
                      as="a"
                      variant="icon"
                      size="icon"
                      :href="project.githubLink"
                      target="_blank"
                    >
                      <font-awesome-icon
                        class="text-xl"
                        icon="fa-brands fa-github"
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github respository link</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button
                      :as="project.hasLiveLink ? 'a' : 'button'"
                      variant="icon"
                      size="icon"
                      :disabled="!project.hasLiveLink"
                      :href="project.liveLink"
                      target="_blank"
                    >
                      <font-awesome-icon
                        class="text-lg"
                        icon="fa-solid fa-arrow-up-right-from-square"
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p v-if="project.hasLiveLink">
                      Live link for the application
                    </p>
                    <p v-else="project.hasLiveLink">
                      No live link available for this project
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
