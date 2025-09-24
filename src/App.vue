<template>
  <div>
    <NavigationBar theme="wireframe" />
    <main data-theme="wireframe" class="h-screen p-3">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "./components/navigationBar.vue";
</script>
