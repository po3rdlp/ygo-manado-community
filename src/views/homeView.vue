<template>
  <div>
    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-center"
    >
      <div class="flex flex-col items-center md:items-end space-y-6">
        <CardComponents :image="topDeck" title="Top Deck" @click="goToDeck" />
        <CardComponents
          :image="tournamentImg"
          title="Tournaments"
          @click="goToTopTournament"
        />
      </div>

      <div class="hidden xl:flex justify-center">
        <img :src="img" alt="Mascot" class="w-80 xl:w-96 opacity-50" />
      </div>

      <div class="flex flex-col items-center md:items-start space-y-6">
        <CardComponents
          :image="topPLayer"
          title="Top Player"
          @click="goToTopPlayer"
        />
        <CardComponents :image="matchesImg" title="Matches" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import img from "@/assets/character-yu-gi-oh.png";
import CardComponents from "@/components/cardComponents.vue";
import topDeck from "@/assets/yummy_yugio_top_deck.jpg";
import topPLayer from "@/assets/ryzen_yugio_top_player.png";
import tournamentImg from "@/assets/masqurade_yugio-tournament.jpg";
import matchesImg from "@/assets/draco_yugio_matches.jpg";

const router = useRouter();

const goToDeck = () => {
  router.push("/tournaments");
};
const goToTopPlayer = () => {
  router.push("/top-players");
};
const goToTopTournament = () => {
  router.push("/tournaments");
};
</script>
