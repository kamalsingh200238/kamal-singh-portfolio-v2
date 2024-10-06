<script setup lang="ts">
import { TabsContent, TabsList, TabsTrigger, Tabs } from "~/components/ui/tabs";
import { experiences } from "~/data/experiences";
</script>

<template>
  <section
    id="experience"
    class="py-10 px-8 md:py-12 md:px-12 lg:py-16 lg:px-16 text-slate-300 scroll-m-16"
  >
    <div class="mx-auto max-w-5xl">
      <h2
        class="flex justify-center items-center mb-8 font-bold text-center md:mb-12 md:text-2xl lg:text-3xl"
      >
        <span class="mr-2 text-teal-300">02.</span> Work Experience
      </h2>

      <Tabs :default-value="experiences[0].company">
        <TabsList class="grid grid-cols-2">
          <TabsTrigger
            v-for="exp in experiences"
            :key="exp.company"
            :value="exp.company"
          >
            {{ exp.company }}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          v-for="exp in experiences"
          :key="exp.company"
          :value="exp.company"
        >
          <div class="mt-4">
            <h3 class="mb-2 text-lg font-bold lg:text-xl">
              {{ exp.position }}
            </h3>
            <p class="mb-2 text-lg font-semibold md:text-xl text-teal-300">
              {{ exp.company }}
            </p>
            <p class="mb-4 text-sm lg:text-base text-teal-300">
              {{ exp.period }}
            </p>
          </div>
          <div>
            <ul class="pl-4 space-y-4 list-disc">
              <li
                v-for="responsibility in exp.responsibilities"
                :key="responsibility"
              >
                {{ responsibility }}
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
</template>
