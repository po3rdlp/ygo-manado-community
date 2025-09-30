<template>
  <div class="flex flex-col items-center justify-center text-center px-4">
    c

    <h1 class="text-7xl font-extrabold text-purple-500 drop-shadow-lg">404</h1>

    <p class="mt-4 text-xl text-gray-200">Page Not Found</p>

    <router-link
      to="/"
      class="mt-6 inline-block bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 transition shadow-lg"
    >
      Back To Home
    </router-link>
  </div>
</template>

<script setup>
import Logo from "@/assets/character-yu-gi-oh.png";
</script>
