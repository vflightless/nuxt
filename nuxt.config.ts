// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Flightless',
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  runtimeConfig: {
    contentful: {
      spaceId: process.env.SPACE_ID,
      token: process.env.DELIVERY_TOKEN
    }
  },
  
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
})