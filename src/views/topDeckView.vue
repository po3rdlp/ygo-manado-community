<template>
  <div class="card bg-base-100 image-full w-96 h-56 shadow-sm">
    <figure>
      <img :src="img" alt="yummy" class="object-cover w-full h-full" />
    </figure>
    <div class="card-body flex items-center justify-center">
      <h2 class="card-title text-center text-gray-300 text-4xl">TOP DECK</h2>
    </div>
  </div>
</template>

<script setup>
import img from "@/assets/yummy_yugio_top_deck.jpg";
</script>
