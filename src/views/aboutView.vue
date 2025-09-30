<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center px-6 py-10 text-white"
  >
    <img
      :src="Logo"
      alt="Logo"
      class="w-32 h-32 mb-6 drop-shadow-lg animate-bounce"
    />

    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
      <span
        class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Yugioh Manado Community
      </span>
    </h1>

    <p class="text-lg text-gray-200 text-center max-w-2xl mb-12 italic">
      “A local community in Manado for all duelists — beginners or veterans —
      united by passion for Yu-Gi-Oh!”
    </p>

    <div class="max-w-5xl w-full space-y-10">
      <div class="grid sm:grid-cols-2 gap-6">
        <div
          class="bg-white/5 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
        >
          <h2 class="text-2xl font-semibold text-purple-400 mb-3">
            🎯 Mission
          </h2>
          <p class="text-gray-300">
            To create a
            <span class="text-purple-300 font-medium"
              >friendly and supportive</span
            >
            community for duelists in Manado.
          </p>
        </div>
        <div
          class="bg-white/5 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
        >
          <h2 class="text-2xl font-semibold text-purple-400 mb-3">🌟 Vision</h2>
          <p class="text-gray-300">
            To grow as the most
            <span class="text-purple-300 font-medium"
              >united Yu-Gi-Oh! community</span
            >
            in Manado, known for both skill and friendship.
          </p>
        </div>
      </div>

      <div class="bg-white/5 rounded-lg p-6 shadow-lg">
        <h2 class="text-2xl font-semibold text-purple-400 mb-4">
          👑 Organizer
        </h2>
        <ul class="grid sm:grid-cols-5 gap-4 text-center">
          <li class="rounded p-3 hover:bg-purple-500/30 transition">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img :src="imgAntares" />
              </div>
            </div>
            <span class="block font-bold">Antares</span>
            <span class="text-sm text-gray-300">Weekly Organizer</span>
          </li>
          <li class="rounded p-3 hover:bg-purple-500/30 transition">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img :src="imgSerenity" />
              </div>
            </div>
            <span class="block font-bold">Serenity</span>
            <span class="text-sm text-gray-300">Monthly Organizer</span>
          </li>
          <li class="rounded p-3 hover:bg-purple-500/30 transition">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img :src="imgCain" />
              </div>
            </div>
            <span class="block font-bold">Cain</span>
            <span class="text-sm text-gray-300">Head Judge</span>
          </li>
          <li class="rounded p-3 hover:bg-purple-500/30 transition">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img :src="imgHenry" />
              </div>
            </div>
            <span class="block font-bold">Henry</span>
            <span class="text-sm text-gray-300">Data Analyst</span>
          </li>
          <li class="rounded p-3 hover:bg-purple-500/30 transition">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img
                  src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                />
              </div>
            </div>
            <span class="block font-bold">???</span>
            <span class="text-sm text-gray-300">Ketua</span>
          </li>
        </ul>
      </div>

      <div class="bg-white/5 rounded-lg p-6 shadow-lg">
        <h2 class="text-2xl font-semibold text-purple-400 mb-3">
          🎲 Activities
        </h2>
        <p class="text-gray-300">
          We host
          <span class="text-purple-300 font-medium">local tournaments</span>,
          casual meetups, and deck discussions in Manado. Our activities are all
          about
          <span class="italic">fun, learning, and friendly competition</span>.
        </p>
      </div>

      <div class="bg-white/5 rounded-lg p-6 shadow-lg text-center">
        <h2 class="text-2xl font-semibold text-purple-400 mb-3">🤝 Join Us</h2>
        <p class="text-gray-300 mb-4">
          Stay connected with us on Discord and Instagram for the latest updates
          about our community events in Manado.
        </p>
        <div class="flex justify-center gap-6">
          <a href="#" class="text-purple-400 underline hover:text-purple-300"
            >Discord</a
          >
          <a href="#" class="text-purple-400 underline hover:text-purple-300"
            >Instagram</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "@/assets/character-yu-gi-oh.png";
import imgAntares from "@/assets/stratos_antares.webp";
import imgSerenity from "@/assets/CyberDragon_serenity.webp";
import imgCain from "@/assets/Rescue-cat-cain.jpg";
import imgHenry from "@/assets/el-shadol-henry.jpg";
</script>
