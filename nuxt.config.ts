// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  runtimeConfig: {
    spaceID: process.env.SPACE_ID,
    graphToken: process.env.API_KEY,
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

})