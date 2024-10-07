// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [ '@nuxtjs/tailwindcss','shadcn-nuxt'],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
    ,'~/assets/css/tailwind.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
})
