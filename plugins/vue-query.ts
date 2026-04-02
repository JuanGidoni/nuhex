import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  const queryClient = new QueryClient();

  nuxtApp.vueApp.use(VueQueryPlugin, {
    queryClient,
  });
});
