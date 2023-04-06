// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],
  css: ["@/assets/styles/style.scss"],
  googleFonts: {
    families: {
      Oxanium: [200, 300, 400, 500, 600],
      Outfit: [300, 400, 500],
    },
  },
});
