<template>
  <div
    class="z-10 w-full min-h-96 flex flex-col items-center justify-center px-4 py-6"
  >
    <h1 class="text-lg sm:text-3xl lg:text-4xl font-bold text-center mb-8">
      <span class="text-gray-300">Welcome to</span>
      <span class="text-purple-500"> Yugioh Manado Community</span>
    </h1>
    <div class="grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
      <CardComponents :image="topDeck" title="Top Deck" @click="goToDeck" />

      <CardComponents
        :image="tournamentImg"
        title="Tournaments"
        @click="goToTopTournament"
      />
      <CardComponents :image="AboutImg" title="About" @click="goToabout" />
      <CardComponents
        :image="topPLayer"
        title="Top Player"
        @click="goToTopPlayer"
      />
      <CardComponents
        :image="matchesImg"
        title="COMMING SOON"
        @click="goToMatches"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import CardComponents from "@/components/cardComponents.vue";

import topDeck from "@/assets/yummy_yugio_top_deck.jpg";
import topPLayer from "@/assets/ryzen_yugio_top_player.png";
import tournamentImg from "@/assets/masqurade_yugio-tournament.jpg";
import matchesImg from "@/assets/draco_yugio_matches.jpg";
import AboutImg from "@/assets/pot_of_prosperity__art.png";

const router = useRouter();

const goToabout = () => router.push("/about");
const goToMatches = () => router.push("/matches");
const goToDeck = () => router.push("/top-deck");
const goToTopPlayer = () => router.push("/top-players");
const goToTopTournament = () => router.push("/tournaments");
</script>
