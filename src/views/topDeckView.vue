<template>
  <div class="p-4">
    <h2 class="text-lg font-bold text-gray-200 mb-4">Top Decks :</h2>

    <div v-if="isLoading" class="flex justify-center items-center py-8">
      <p class="text-gray-300">Loading...</p>
    </div>

    <div
      v-else-if="error"
      class="bg-red-500/20 border border-red-400/50 text-red-300 px-3 py-2 rounded text-sm"
    >
      <p>{{ error }}</p>
    </div>

    <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      <div
        v-for="deck in dataTopDecks"
        :key="deck.id"
        class="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 hover:bg-white/15 transition-all"
      >
        <div class="flex justify-between items-start mb-2">
          <div class="flex items-center space-x-3">
            <div v-if="deck.imageUrl" class="flex-shrink-0">
              <img
                :src="deck.imageUrl"
                :alt="deck.name"
                class="w-12 h-12 rounded-lg object-cover border-2 border-white/30"
              />
            </div>
            <div>
              <h3 class="font-bold text-gray-100 text-sm mb-1">
                {{ deck.name }}
              </h3>
              <span class="text-lg font-bold" :class="getWinRateColor(deck)">
                {{ calculateWinRate(deck) }}%
              </span>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center text-xs">
          <div class="flex flex-wrap gap-2">
            <span class="text-green-400 font-bold">W:{{ deck.win }}</span>
            <span class="text-gray-300 font-bold">D:{{ deck.draw }}</span>
            <span class="text-red-400 font-bold">L:{{ deck.lose }}</span>
            <span class="text-blue-400 font-bold">
              Point:
              <span class="text-blue-400 font-bold">{{ deck.point }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { api } from "@/services/api.config";
import { TopDecks } from "@/types/data.types";

const dataTopDecks = ref<TopDecks[]>([]);
const isLoading = ref<boolean>(true);
const error = ref<string | null>(null);

const calculateWinRate = (deck: TopDecks): number => {
  const totalMatches = deck.win + deck.draw + deck.lose;
  if (totalMatches === 0) return 0;
  return Math.round((deck.win / totalMatches) * 100);
};

const getWinRateColor = (deck: TopDecks): string => {
  const winRate = calculateWinRate(deck);

  if (winRate >= 80) return "text-green-400";
  if (winRate >= 70) return "text-emerald-400";
  if (winRate >= 60) return "text-lime-400";
  if (winRate >= 50) return "text-yellow-400";
  if (winRate >= 40) return "text-orange-400";
  return "text-red-400";
};

onMounted(async () => {
  try {
    const res = await api.get<TopDecks[]>("/api/decks");
    console.log("Top Decks", res.data);
    dataTopDecks.value = res.data;
  } catch (err: any) {
    console.error("Gagal fetch data:", err.message);
    error.value = "Gagal mengambil data Decks";
  } finally {
    isLoading.value = false;
  }
});
</script>
