export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
  ],
  imports: {
    dirs: ['stores']
  },
  app: {
    head: {
      script: [{
        src: "https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js",
        type: "text/javascript",
        async: true
      }],
    },
  },
})