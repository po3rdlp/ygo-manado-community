<template>
  <nav class="w-full bg-black/40 backdrop-blur-sm shadow-lg p-4 h-full">
    <div class="flex justify-center">
      <img :src="Logo" alt="Logo" class="w-56 h-auto" />
    </div>

    <div class="hidden md:flex justify-center">
      <ul class="flex gap-6">
        <li>
          <router-link
            to="/"
            class="text-white font-medium hover:text-purple-400"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/top-deck"
            class="text-white font-medium hover:text-purple-400"
            >Top Deck</router-link
          >
        </li>
        <li>
          <router-link
            to="/top-players"
            class="text-white font-medium hover:text-purple-400"
            >Top Players</router-link
          >
        </li>
        <li>
          <router-link
            to="/tournaments"
            class="text-white font-medium hover:text-purple-400"
            >Tournaments</router-link
          >
        </li>
        <li>
          <router-link
            to="/matches"
            class="text-white font-medium hover:text-purple-400"
            >Matches</router-link
          >
        </li>
      </ul>
    </div>

    <div class="flex md:hidden justify-center mt-4 relative" ref="menuWrapper">
      <button
        @click="toggleMenu"
        class="btn border-none shadow-xl text-white bg-gradient-to-b from-gray-800 via-gray-800 to-gray-700 w-10 h-10 p-2 rounded-lg"
      >
        <Icon icon="mdi:menu" :width="24" :height="24" color="#FBEDFC" />
      </button>

      <transition name="fade">
        <div
          v-if="isOpen"
          class="absolute top-full mt-2 w-48 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-700 p-2 rounded-box shadow z-50"
        >
          <ul class="flex flex-col gap-2 w-full text-white">
            <li>
              <router-link to="/" class="btn w-full" @click="closeMenu"
                >Home</router-link
              >
            </li>
            <li>
              <router-link to="/top-deck" class="btn w-full" @click="closeMenu"
                >Top Deck</router-link
              >
            </li>
            <li>
              <router-link
                to="/top-players"
                class="btn w-full"
                @click="closeMenu"
                >Top Players</router-link
              >
            </li>
            <li>
              <router-link
                to="/tournaments"
                class="btn w-full"
                @click="closeMenu"
                >Tournaments</router-link
              >
            </li>
            <li>
              <router-link to="/matches" class="btn w-full" @click="closeMenu"
                >Matches</router-link
              >
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Logo from "@/assets/ygo.png";
import { Icon } from "@iconify/vue";

const isOpen = ref(false);
const menuWrapper = ref(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (menuWrapper.value && !menuWrapper.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const isSticky = ref(false);
const handleScroll = () => {
  isSticky.value = window.scrollY > 90;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

defineProps({
  theme: {
    type: String,
    default: "light",
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
