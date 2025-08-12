export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  imports: {
    autoImport: true,
  },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Saleem-Ur-Rehman",
      meta: [
        { charset: "UTF-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
    },
  },
});
