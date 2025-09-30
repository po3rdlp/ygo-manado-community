<template>
  <div class="flex flex-col min-h-screen">
    <navigationBarComponents class="fixed top-0 left-0 w-full z-50" />

    <main
      data-theme="wireframe"
      class="flex-1 p-4 bg-gradient-to-b from-gray-950 via-indigo-950 to-purple-950 pt-20 lg:pt-28"
    >
      <div v-if="showBack" class="mb-2">
        <button
          @click="router.back()"
          class="flex items-center text-purple-400 hover:text-purple-300 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M16 19L5 12l11-7z" />
          </svg>
          Back
        </button>
      </div>

      <RouterView />
    </main>

    <footerComponents />
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";

import navigationBarComponents from "./components/navigationBarComponents.vue";
import footerComponents from "./components/footerComponents.vue";

const router = useRouter();
const route = useRoute();
const showBack = computed(
  () => route.path !== "/" && route.name !== "NotFound"
);
</script>
