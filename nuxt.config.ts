import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias:
  {
    "@/":fileURLToPath(new URL("assets/", import.meta.url))
  },
  css:[
    "@/assets/style.css"
  ]

})
