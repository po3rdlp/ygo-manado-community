<template>
  <div class="p-4 text-white">
    <div v-if="isLoading" class="text-center h-screen">
      <loadingComponents />
    </div>
    <div v-else-if="err" class="text-center text-red-400">{{ err }}</div>
    <div v-else-if="dataDeck">
      <h2 class="text-2xl font-bold mb-4">{{ dataDeck.name }}</h2>

      <div
        class="grid grid-cols-2 gap-2 text-sm mb-3 border border-gray-600 rounded-lg p-3"
      >
        <p><span class="font-semibold">ID:</span> {{ dataDeck.id }}</p>
        <p>
          <span class="font-semibold">Participation:</span>
          {{ dataDeck.participation }}
        </p>
        <p>
          <span class="font-semibold">Topping:</span> {{ dataDeck.topping }}
        </p>
        <p><span class="font-semibold">Gold:</span> {{ dataDeck.gold }}</p>
        <p><span class="font-semibold">Silver:</span> {{ dataDeck.silver }}</p>
        <p><span class="font-semibold">Bronze:</span> {{ dataDeck.bronze }}</p>
        <p><span class="font-semibold">Win:</span> {{ dataDeck.win }}</p>
        <p><span class="font-semibold">Draw:</span> {{ dataDeck.draw }}</p>
        <p><span class="font-semibold">Lose:</span> {{ dataDeck.lose }}</p>
        <p><span class="font-semibold">Point:</span> {{ dataDeck.point }}</p>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-3">Match History :</h3>
        <div
          v-if="dataHistoryDeck.length === 0"
          class="flex items-center justify-center gap-2 bg-yellow-700/30 border border-yellow-500 text-yellow-200 rounded-lg p-4 text-center"
        >
          <span class="font-semibold">No match history for this deck.</span>
        </div>

        <div v-else class="overflow-x-auto">
          <TableComponents
            :data="dataHistoryDeck"
            :columns="columns"
            :show-search="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { createColumnHelper, ColumnDef } from "@tanstack/vue-table";
import { Deck, DeckMatchHistory } from "@/types/data.types";
import { api } from "@/services/api.config";
import TableComponents from "@/components/tableComponents.vue";
import loadingComponents from "@/components/loadingComponents.vue";

const route = useRoute();
const id = route.params.id as string;

const dataDeck = ref<Deck | null>(null);
const dataHistoryDeck = ref<DeckMatchHistory[]>([]);
const isLoading = ref<boolean>(true);
const err = ref<string | null>(null);

const columnHelper = createColumnHelper<DeckMatchHistory>();

const columns: ColumnDef<DeckMatchHistory, any>[] = [
  columnHelper.accessor("matchId", {
    header: "Match ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("player1Name", {
    header: "Player 1",
    cell: (info) => `${info.getValue()} (${info.row.original.player1DeckName})`,
  }),
  columnHelper.accessor("player1Score", {
    header: "Score P1",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("player2Name", {
    header: "Player 2",
    cell: (info) => `${info.getValue()} (${info.row.original.player2DeckName})`,
  }),
  columnHelper.accessor("player2Score", {
    header: "Score P2",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("round", {
    header: "Round",
    cell: (info) => info.getValue(),
  }),
];

onMounted(async () => {
  try {
    const deckRes = await api.get<Deck>(`/api/decks/${id}`);
    dataDeck.value = deckRes.data;

    const historyRes = await api.get<DeckMatchHistory[]>(
      `/api/decks/${id}/matches`
    );
    dataHistoryDeck.value = historyRes.data;
  } catch (error: any) {
    console.error("Gagal fetch data:", error.message);
    err.value = "Gagal mengambil data Deck";
  } finally {
    isLoading.value = false;
  }
});
</script>
