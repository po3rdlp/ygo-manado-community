<template>
  <nav
    class="navbar p-2 h-28 bg-base-100 border border-accent"
    :data-theme="theme"
  >
    <div class="flex w-full justify-between items-center">
      <img :src="Logo" alt="HKSP Logo" class="w-1/3 max-w-44 h-auto" />

      <div class="flex-none lg:hidden">
        <button @click="isOpen = !isOpen" class="btn btn-ghost">
          <Icon icon="mdi:menu" width="32" height="32" />
        </button>
      </div>

      <div class="hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><router-link to="/" class="btn">Home</router-link></li>
          <li>
            <router-link to="/top-deck" class="btn">Top Deck</router-link>
          </li>
          <li>
            <router-link to="/top-players" class="btn">Top Players</router-link>
          </li>
          <li>
            <router-link to="/tournamets" class="btn">Tournaments</router-link>
          </li>
          <li><router-link to="/matches" class="btn">Matches</router-link></li>
        </ul>
      </div>
    </div>

    <div v-if="isOpen" class="lg:hidden mt-2">
      <ul class="menu bg-base-100 w-full p-2 rounded-box shadow">
        <li><router-link to="/" class="btn w-full">Home</router-link></li>
        <li>
          <router-link to="/top-deck" class="btn w-full">Top Deck</router-link>
        </li>
        <li>
          <router-link to="/top-players" class="btn w-full"
            >Top Players</router-link
          >
        </li>
        <li>
          <router-link to="/tournaments" class="btn w-full"
            >Tournamentss</router-link
          >
        </li>
        <li>
          <router-link to="/matches" class="btn w-full">Matches</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import Logo from "@/assets/ygo.png";
import { Icon } from "@iconify/vue";

const isOpen = ref(false);

defineProps({
  theme: {
    type: String,
    default: "light",
  },
});
</script>
