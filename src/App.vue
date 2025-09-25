<template>
  <div class="flex flex-col min-h-screen">
    <navigationBarComponents />
    <main
      data-theme="wireframe"
      class="h-full p-3 bg-gradient-to-b from-gray-950 via-indigo-950 to-purple-900"
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
