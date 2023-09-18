// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  // modules: ['bootstrap-vue/nuxt']
  css: [
  '~/assets/css/main.css',    
  // 'bootstrap/dist/css/bootstrap.css',
  // 'bootstrap-vue/dist/bootstrap-vue.css'
],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
      //   { src: '~/plugins/bootstrap-vue', ssr: false },
    { src: '~/plugins/sweetalert', ssr: false }
  ],
})
