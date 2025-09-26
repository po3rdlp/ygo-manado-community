<template>
  <div class="p-6 text-white grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Info Tournament -->
    <div class="bg-black/40 rounded-lg p-4">
      <h2 class="text-xl font-bold mb-4">MATCH INFORMATION</h2>
      <table class="w-full text-sm">
        <tbody>
          <tr>
            <td class="py-2 font-semibold pr-4">ID Tournament</td>
            <td class="py-2 text-purple-300 font-bold text-3xl">{{ id }}</td>
          </tr>

          <tr v-if="tournamentsInfo">
            <td class="py-2 font-semibold pr-4">Name</td>
            <td class="py-2">{{ tournamentsInfo?.name }}</td>
          </tr>

          <tr v-if="tournamentsInfo">
            <td class="py-2 font-semibold pr-4">Date</td>
            <td class="py-2">{{ tournamentsInfo?.date }}</td>
          </tr>

          <tr v-if="tournamentsInfo">
            <td class="py-2 font-semibold pr-4">Participants</td>
            <td class="py-2">
              <ul class="list-disc list-inside space-y-1">
                <li
                  v-for="(p, idx) in tournamentsInfo?.participants"
                  :key="idx"
                >
                  <span class="font-semibold">{{ p.duelistName }}</span>
                  – <span class="text-purple-300">{{ p.deckName }}</span>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Matches -->
    <div class="bg-black/40 rounded-lg p-4">
      <template v-if="isLoading">
        <p>Loading...</p>
      </template>

      <template v-else-if="error">
        <p class="text-red-400">{{ error }}</p>
      </template>

      <template v-else>
        <div v-for="(round, rIdx) in dataTournaments" :key="rIdx" class="mb-8">
          <h3 class="text-purple-400 text-lg font-bold mb-4">
            {{ round.round }}
          </h3>

          <div v-for="match in round.matches" :key="match.id" class="mb-6">
            <div
              class="flex items-center justify-between overflow-hidden gap-3 rounded-lg"
            >
              <!-- Player 1 -->
              <div
                class="relative flex items-center w-1/2 p-2 bg-cover bg-center"
                :style="{
                  backgroundImage: `url(${match.player1Deck.imageUrl})`,
                }"
              >
                <!-- Overlay: gelap kalau kalah -->
                <div
                  class="absolute inset-0"
                  :class="
                    getOverlayClass(match.player1Score, match.player2Score)
                  "
                ></div>

                <div class="relative z-10 flex items-center w-full">
                  <img
                    :src="match.player1.avatarUrl || placeHoldImg"
                    alt=""
                    class="w-10 h-10 object-cover rounded"
                  />
                  <span class="ml-2 font-semibold">{{
                    match.player1.name
                  }}</span>
                  <span
                    class="ml-auto font-bold"
                    :class="
                      match.player1Score > match.player2Score
                        ? 'text-green-400'
                        : 'text-red-400'
                    "
                  >
                    {{ match.player1Score > match.player2Score ? "W" : "L" }}
                  </span>
                </div>
              </div>

              <!-- Player 2 -->
              <div
                class="relative flex items-center w-1/2 p-2 justify-end bg-cover bg-center"
                :style="{
                  backgroundImage: `url(${match.player2Deck.imageUrl})`,
                }"
              >
                <!-- Overlay: gelap kalau kalah -->
                <div
                  class="absolute inset-0"
                  :class="
                    getOverlayClass(match.player2Score, match.player1Score)
                  "
                ></div>

                <div
                  class="relative z-10 flex items-center w-full justify-end gap-2"
                >
                  <span
                    class="mr-auto font-bold"
                    :class="
                      match.player2Score > match.player1Score
                        ? 'text-green-400'
                        : 'text-red-400'
                    "
                  >
                    {{ match.player2Score > match.player1Score ? "W" : "L" }}
                  </span>
                  <span class="mr-2 font-semibold">{{
                    match.player2.name
                  }}</span>
                  <img
                    :src="match.player2.avatarUrl || placeHoldImg"
                    alt=""
                    class="w-10 h-10 object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { api } from "@/services/api.config";
import type { TournamentsRound, TournamentInfo } from "@/types/data.types";
import placeHoldImg from "@/assets/character-yu-gi-oh.png";

const route = useRoute();
const id = route.params.id;

const dataTournaments = ref<TournamentsRound[]>([]);
const tournamentsInfo = ref<TournamentInfo | null>(null);
const isLoading = ref(true);
const error = ref<string | null>(null);

const getOverlayClass = (scoreA: number, scoreB: number) => {
  return scoreA > scoreB ? "bg-black/50" : "bg-black/80";
};

onMounted(async () => {
  try {
    const [matchesRes, infoRes] = await Promise.all([
      api.get<TournamentsRound[]>(`/api/tournaments/${id}/matches`),
      api.get<TournamentInfo>(`/api/tournaments/details/${id}`),
    ]);

    dataTournaments.value = matchesRes.data;
    tournamentsInfo.value = infoRes.data;
  } catch (err: any) {
    console.error("Gagal fetch data:", err.message);
    error.value = "Gagal mengambil data tournament";
  } finally {
    isLoading.value = false;
  }
});
</script>
