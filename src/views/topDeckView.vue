<template>
  <div class="p-2">
    <h2 class="text-lg font-bold text-gray-200">Top Decks :</h2>
    <div v-if="isLoading" class="flex justify-center items-center py-8">
      <loadingComponents />
    </div>

    <div
      v-else-if="error"
      class="bg-red-500/20 border border-red-400/50 text-red-300 px-3 py-2 rounded text-sm"
    >
      <p>{{ error }}</p>
    </div>

    <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
      <div
        v-for="deck in dataTopDecks"
        :key="deck.id"
        class="relative rounded-lg p-3 hover:scale-105 transition-all bg-cover bg-center"
        :style="{
          backgroundImage: deck.imageUrl ? `url(${deck.imageUrl})` : 'none',
        }"
      >
        <div class="absolute inset-0 bg-black/80 rounded-lg"></div>

        <div
          class="relative flex flex-col justify-between h-full text-white cursor-pointer"
          @click="route.push(`/deck/${deck.id}`)"
        >
          <div class="flex justify-between items-start mb-2">
            <div class="flex flex-col space-y-1">
              <div>
                <h3 class="font-bold text-xs lg:text-lg grid">
                  {{ deck.name }}
                  <span class="font-light text-[10px] lg:text-[15px]">
                    {{ deck.tier != "Others" ? deck.tier : "-" }}
                  </span>
                </h3>
              </div>

              <span class="text-lg font-bold" :class="getWinRateColor(deck)">
                {{ calculateWinRate(deck) }}%
              </span>
            </div>

            <div v-if="deck.imageUrl" class="flex-shrink-0 ml-2">
              <img
                :src="deck.imageUrl"
                :alt="deck.name"
                class="w-12 h-12 rounded-lg border-2 border-white/30 object-cover"
                @click.stop="openModal(deck.imageUrl)"
              />
            </div>
          </div>

          <div class="flex justify-between items-center text-xs mt-auto">
            <div class="flex flex-wrap gap-2">
              <span class="text-green-400 font-bold">W:{{ deck.win }}</span>
              <span class="text-gray-300 font-bold">D:{{ deck.draw }}</span>
              <span class="text-red-400 font-bold">L:{{ deck.lose }}</span>
              <span class="text-blue-400 font-bold"
                >Point: {{ deck.point }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <imageViewComponents :imageUrl="selectedImage" @close="closeModal" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { api } from "@/services/api.config";
import { TopDeckTierList } from "@/types/data.types";
import loadingComponents from "@/components/loadingComponents.vue";
import imageViewComponents from "@/components/imageViewComponents.vue";
import { useRouter } from "vue-router";

const route = useRouter();

const dataTopDecks = ref<TopDeckTierList[]>([]);
const isLoading = ref<boolean>(true);
const error = ref<string | null>(null);

const calculateWinRate = (deck: TopDeckTierList): number => {
  const totalMatches = deck.win + deck.draw + deck.lose;
  if (totalMatches === 0) return 0;
  return Math.round((deck.win / totalMatches) * 100);
};

const getWinRateColor = (deck: TopDeckTierList): string => {
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
    const res = await api.get<TopDeckTierList[]>(
      "/api/decks/api/decks/tierlist"
    );
    console.log("Top Decks", res.data);
    dataTopDecks.value = res.data;
  } catch (err: any) {
    console.error("Gagal fetch data:", err.message);
    error.value = "Gagal mengambil data Decks";
  } finally {
    isLoading.value = false;
  }
});

const selectedImage = ref<string | null>(null);

const openModal = (imageUrl: string) => {
  selectedImage.value = imageUrl;
};

const closeModal = () => {
  selectedImage.value = null;
};
</script>
