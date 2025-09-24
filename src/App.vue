<template>
  <div>
    <NavigationBar />
    <main
      data-theme="wireframe"
      class="h-full p-3 bg-gradient-to-b from-gray-900 via-gray-800 to-black"
    >
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "./components/navigationBar.vue";
</script>
