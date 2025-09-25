<template>
  <div
    :class="[
      'navbar bg-gradient-to-r from-purple-950 via-gray-900 to-gray-950 border-b border-b-gray-900 transition-all duration-300',
      isSticky ? 'fixed top-0 left-0 w-full z-50 shadow-lg' : 'relative',
    ]"
  >
    <div class="navbar-start">
      <div class="relative" ref="menuWrapper">
        <div role="button" class="btn btn-ghost btn-circle" @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>

        <transition name="fade">
          <ul
            v-show="isOpen"
            class="absolute left-0 mt-3 w-52 menu menu-sm bg-gray-900/95 border border-purple-800/40 rounded-box shadow-lg z-50 p-2"
          >
            <li>
              <router-link to="/" class="w-full" @click="closeMenu"
                >Home</router-link
              >
            </li>
            <li>
              <router-link to="/top-deck" class="w-full" @click="closeMenu"
                >Top Deck</router-link
              >
            </li>
            <li>
              <router-link to="/top-players" class="w-full" @click="closeMenu"
                >Top Players</router-link
              >
            </li>
            <li>
              <router-link to="/tournaments" class="w-full" @click="closeMenu"
                >Tournaments</router-link
              >
            </li>
            <li>
              <router-link to="/matches" class="w-full" @click="closeMenu"
                >Matches</router-link
              >
            </li>
          </ul>
        </transition>
      </div>
    </div>

    <div class="navbar-center lg:right-28 relative">
      <img :src="Logo" alt="logo" class="w-40 lg:w-56" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Logo from "@/assets/yugio-logo.png";

const isOpen = ref(false);
const menuWrapper = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const closeMenu = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (menuWrapper.value && !menuWrapper.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

const isSticky = ref(false);
const handleScroll = () => {
  isSticky.value = window.scrollY > 100;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
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
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
