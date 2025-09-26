<template>
  <div
    :class="[
      'navbar fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-950 via-gray-900 to-gray-950 border-b border-b-gray-900 transition-all duration-300',
      isSticky
        ? 'shadow-lg translate-y-0 opacity-100'
        : '-translate-y-2 opacity-90',
    ]"
  >
    <div class="navbar-start relative cursor-pointer p-2" @click="goHome">
      <img :src="Logo" alt="logo" class="w-20 sm:w-28 lg:w-36 xl:w-40 h-auto" />
      <img
        :src="Logo2"
        alt="logo"
        class="w-10 sm:w-12 lg:w-14 xl:w-16 h-auto"
      />
    </div>

    <div class="navbar-end right-28">
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
            class="absolute right-0 mt-3 w-52 menu menu-sm bg-gray-900/95 border border-purple-800/40 rounded-box shadow-lg z-50 p-2"
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Logo from "@/assets/Logo_Yu_Gi_Oh.png";
import Logo2 from "@/assets/character-yu-gi-oh.png";
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
