// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  
  runtimeConfig: {
    spaceID: process.env.cms_space,
    graphToken: process.env.cms_preview,
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

})