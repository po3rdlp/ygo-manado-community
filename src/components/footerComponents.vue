<template>
  <footer
    class="bg-gradient-to-r from-purple-900 via-blue-900 to-black text-neutral-content w-full z-50 sticky bottom-0 left-0 flex flex-col sm:flex-row items-center justify-between gap-y-3 sm:gap-y-0 sm:gap-x-6 py-2 px-3 text-[11px] sm:py-3 sm:px-4 sm:text-sm"
  >
    <aside class="flex items-center gap-2">
      <img :src="Logo" alt="Logo" class="w-8 lg:hidden" />
      <p>Copyright © {{ new Date().getFullYear() }} - All rights reserved</p>
      <img :src="Logo" alt="Logo" class="w-8" />
    </aside>

    <nav class="flex gap-6">
      <a
        href="https://discord.com"
        target="_blank"
        rel="noopener"
        class="text-purple-400 underline hover:text-purple-300 transition"
      >
        Discord
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener"
        class="text-purple-400 underline hover:text-purple-300 transition"
      >
        Instagram
      </a>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import Logo from "@/assets/character-yu-gi-oh.png";
</script>
