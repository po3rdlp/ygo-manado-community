<template>
  <div class="p-4 text-white">
    <div v-if="isLoading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-400">{{ error }}</div>
    <div v-else-if="playerData">
      <div class="mb-6p-4 rounded-lg shadow">
        <h2 class="text-xl font-bold mb-4">{{ playerData.duelist.name }}</h2>

        <div
          class="grid grid-cols-2 gap-2 text-sm border border-gray-600 rounded-lg p-3 bg-gray-900/50"
        >
          <p>
            <span class="font-semibold">ID:</span> {{ playerData.duelist.id }}
          </p>
          <p>
            <span class="font-semibold">Participation:</span>
            {{ playerData.duelist.participation }}
          </p>
          <p>
            <span class="font-semibold">Topping:</span>
            {{ playerData.duelist.topping }}
          </p>
          <p>
            <span class="font-semibold">Gold:</span>
            {{ playerData.duelist.gold }}
          </p>
          <p>
            <span class="font-semibold">Silver:</span>
            {{ playerData.duelist.silver }}
          </p>
          <p>
            <span class="font-semibold">Bronze:</span>
            {{ playerData.duelist.bronze }}
          </p>
          <p>
            <span class="font-semibold">Win:</span> {{ playerData.duelist.win }}
          </p>
          <p>
            <span class="font-semibold">Draw:</span>
            {{ playerData.duelist.draw }}
          </p>
          <p>
            <span class="font-semibold">Lose:</span>
            {{ playerData.duelist.lose }}
          </p>
          <p>
            <span class="font-semibold">Point:</span>
            {{ playerData.duelist.point }}
          </p>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-3">Match History</h3>
        <div
          v-if="playerData.matches.length === 0"
          class="flex items-center justify-center gap-2 bg-yellow-700/30 border border-yellow-500 text-yellow-200 rounded-lg p-4 text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z"
            />
          </svg>
          <span class="font-semibold">No match for this player.</span>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="table-auto w-full border border-gray-700 text-sm">
            <thead class="bg-gray-800">
              <tr>
                <th class="px-4 py-2">Player (Deck)</th>
                <th class="px-4 py-2">Score</th>
                <th class="px-4 py-2">Opponent (Deck)</th>
                <th class="px-4 py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="match in playerData.matches"
                :key="match.matchId"
                class="border-t border-gray-700"
              >
                <td class="px-4 py-2">
                  <div
                    class="relative h-24 rounded-lg overflow-hidden flex items-center p-2"
                    :style="{
                      backgroundImage: `url(${match.playerDeck.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }"
                  >
                    <div class="absolute inset-0 bg-black/50"></div>
                    <div
                      class="relative z-10 flex items-center justify-between w-full"
                    >
                      <span class="font-semibold">{{
                        playerData.duelist.name
                      }}</span>
                    </div>
                  </div>
                </td>

                <td class="px-4 py-2 font-semibold text-center">
                  {{ match.playerScore }}
                </td>
                <td class="px-4 py-2">
                  <div
                    class="relative h-24 rounded-lg overflow-hidden flex items-center p-2"
                    :style="{
                      backgroundImage: `url(${match.opponentDeck.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }"
                  >
                    <div class="absolute inset-0 bg-black/60"></div>
                    <div
                      class="relative z-10 flex items-center justify-between w-full"
                    >
                      <span class="font-semibold">{{
                        match.opponentName
                      }}</span>
                    </div>
                  </div>
                </td>

                <td class="px-4 py-2 font-semibold text-center">
                  {{ match.opponentScore }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { api } from "@/services/api.config";
import type { PlayerDuelList } from "@/types/data.types";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const playerData = ref<PlayerDuelList | null>(null);
const isLoading = ref<boolean>(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const res = await api.get<PlayerDuelList>(
      `/api/duelists/duelists/${id}/matches`
    );
    playerData.value = res.data;
  } catch (err: any) {
    console.error("Gagal fetch data:", err.message);
    error.value = "Gagal mengambil data player";
  } finally {
    isLoading.value = false;
  }
});
</script>
