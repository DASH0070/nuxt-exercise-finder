export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    publicRuntimeConfig: {
        RAPID_API_KEY: process.env.RAPID_API_KEY
    },
})

