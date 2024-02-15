// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@vueuse/nuxt', 'nuxt-primevue'],
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  primevue: {
    options: {
      unstyled: true
    },
    components: {
      prefix: 'Prime',
    },
    importPT: { as: 'Lara', from: './assets/presets/lara/' },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
