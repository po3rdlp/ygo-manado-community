<template>
  <div class="flex flex-col min-h-screen">
    <navigationBarComponents class="fixed top-0 left-0 w-full z-50" />

    <main
      data-theme="wireframe"
      class="flex-1 p-4 bg-gradient-to-b from-gray-950 via-indigo-950 to-purple-900 pt-20 lg:pt-28"
    >
      <RouterView />
    </main>

    <footerComponents />
  </div>
</template>

<script setup lang="ts">
import navigationBarComponents from "./components/navigationBarComponents.vue";
import footerComponents from "./components/footerComponents.vue";
</script>
