import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      repositoryType: import.meta.env.NUXT_PUBLIC_REPOSITORY_TYPE || "memory",
    },
  },
});
