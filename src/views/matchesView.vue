<template>
  <div
    class="flex flex-col items-center justify-center bg-gradient-to-b text-white px-6"
  >
    <div class="mb-6 animate-bounce">
      <img :src="Logo" alt="Logo" class="w-48 h-48 animate-pulse" />
    </div>

    <h1
      class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4"
    >
      <span
        class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Coming Soon
      </span>
    </h1>

    <router-link
      to="/"
      class="px-6 py-3 rounded-lg shadow-lg transition font-medium"
    >
      Back to Home
    </router-link>
  </div>
</template>

<script setup>
import Logo from "@/assets/character-yu-gi-oh.png";
</script>
