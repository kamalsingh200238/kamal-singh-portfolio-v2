<template>
  <section
    id="about"
    class="py-10 px-8 md:py-12 md:px-12 lg:py-16 lg:px-16 text-slate-300 scroll-m-16"
  >
    <div class="mx-auto max-w-5xl">
      <h2
        class="flex justify-center items-center mb-8 font-bold text-center md:mb-12 md:text-2xl lg:text-3xl"
      >
        <span class="mr-2 text-accent">01.</span> About Me
      </h2>

      <div class="flex flex-col gap-12 lg:flex-row">
        <!-- Image container -->
        <div class="w-full lg:order-2 lg:w-1/2">
          <div
            class="relative mx-auto h-52 lg:h-56 group isolate aspect-square"
          >
            <img
              alt="Kamal Image"
              src="/kamal-image.webp"
              class="object-cover w-full h-full rounded-md transition-all mix-blend-multiply aspect-square group-hover:mix-blend-normal"
            />
            <div
              class="absolute inset-0 bg-teal-500 rounded-lg transition-all -z-10 aspect-square"
            ></div>
            <div
              class="absolute top-3 left-3 w-full rounded-md border-2 border-teal-500 transition-all group-hover:top-2 group-hover:left-2 -z-20 aspect-square"
            ></div>
          </div>
        </div>

        <!-- Text content -->
        <div class="w-full lg:order-1 lg:w-1/2">
          <p class="mb-6">
            I'm a software engineer with a passion for building sleek,
            user-friendly web experiences. I work across both front-end and
            back-end technologies, which helps me create well-rounded solutions
            that look great and work smoothly. I'm always learning and looking
            for ways to improve.
          </p>

          <p>
            I'm also fascinated by cybersecurity and networking, and I enjoy
            exploring how they can make websites more secure and efficient.
            Whether it's fine-tuning performance or diving into new security
            practices, I'm eager to take on challenges that help me grow as a
            developer.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
