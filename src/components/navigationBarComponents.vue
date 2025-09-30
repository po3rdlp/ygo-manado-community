<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-b border-gray-800 flex items-center justify-between px-6 py-3"
  >
    <div class="flex items-center space-x-3 cursor-pointer" @click="goHome">
      <img :src="Logo" alt="logo" class="h-8 w-auto" />
      <span
        class="text-sm md:text-lg lg:text-xl font-bold text-purple-400 uppercase shadow"
      >
        Yugioh Manado Community
      </span>
    </div>

    <div class="hidden lg:flex space-x-6">
      <router-link
        to="/"
        class="text-gray-200 hover:text-purple-400 transition"
      >
        Home
      </router-link>
      <router-link
        to="/about"
        class="text-gray-200 hover:text-purple-400 transition"
        @click="closeMenu"
      >
        About
      </router-link>
      <router-link
        to="/top-deck"
        class="text-gray-200 hover:text-purple-400 transition"
      >
        Top Deck
      </router-link>
      <router-link
        to="/top-players"
        class="text-gray-200 hover:text-purple-400 transition"
      >
        Top Players
      </router-link>
      <router-link
        to="/tournaments"
        class="text-gray-200 hover:text-purple-400 transition"
      >
        Tournaments
      </router-link>
      <!-- <router-link
        to="/matches"
        class="text-gray-200 hover:text-purple-400 transition"
      >
        Matches
      </router-link> comming soon -->
    </div>

    <div class="lg:hidden relative" ref="menuWrapper">
      <button
        @click="toggleMenu"
        class="p-2 rounded-md hover:bg-gray-800 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <transition name="fade">
        <ul
          v-show="isOpen"
          class="absolute right-0 mt-3 w-48 bg-gray-900/95 border border-purple-800/40 rounded-md shadow-lg z-50 py-2"
        >
          <li>
            <router-link
              to="/"
              class="block px-4 py-2 text-gray-200 hover:text-purple-400 hover:bg-gray-800"
              @click="closeMenu"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/top-deck"
              class="block px-4 py-2 text-gray-200 hover:text-purple-400 hover:bg-gray-800"
              @click="closeMenu"
            >
              Top Deck
            </router-link>
          </li>
          <li>
            <router-link
              to="/top-players"
              class="block px-4 py-2 text-gray-200 hover:text-purple-400 hover:bg-gray-800"
              @click="closeMenu"
            >
              Top Players
            </router-link>
          </li>
          <li>
            <router-link
              to="/tournaments"
              class="block px-4 py-2 text-gray-200 hover:text-purple-400 hover:bg-gray-800"
              @click="closeMenu"
            >
              Tournaments
            </router-link>
          </li>
          <!-- <li>
            <router-link
              to="/matches"
              class="block px-4 py-2 text-gray-200 hover:text-purple-400 hover:bg-gray-800"
              @click="closeMenu"
            >
              Matches
            </router-link>
          </li> comming soon -->
          <li>
            <router-link
              to="/about"
              class="block px-4 py-2 text-gray-200 hover:text-purple-400 hover:bg-gray-800"
              @click="closeMenu"
            >
              About
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Logo from "@/assets/Logo_Yu_Gi_Oh.png";
import { useRouter } from "vue-router";

const router = useRouter();

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
  isSticky.value = window.scrollY > 50;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll);
});

const goHome = () => {
  router.push("/");
};
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
