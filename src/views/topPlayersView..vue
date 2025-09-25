<template>
  <div class="h-full">
    <div class="p-3">
      <h1 class="text-xl font-bold mb-4 text-cyan-400">Top 3 Player :</h1>

      <div v-if="isLoading" class="text-white">Loading...</div>
      <div v-else-if="error" class="text-red-400">{{ error }}</div>
      <div v-else>
        <TableComponents
          :data="dataTopPlayers3"
          :columns="columns"
          :show-search="false"
        />
      </div>
    </div>
    <div class="p-3">
      <h1 class="text-xl font-bold mb-4 text-purple-400">Player :</h1>

      <div v-if="isLoading" class="text-white">Loading...</div>
      <div v-else-if="error" class="text-red-400">{{ error }}</div>
      <div v-else>
        <TableComponents
          :data="dataTopPlayers"
          :columns="columns"
          :show-search="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from "vue";
import { api } from "@/services/api.config";
import TableComponents from "@/components/tableComponents.vue";
import { createColumnHelper, type ColumnDef } from "@tanstack/vue-table";

import { TopPlayers } from "@/types/data.types";

const dataTopPlayers = ref<TopPlayers[]>([]);
const dataTopPlayers3 = ref<TopPlayers[]>([]);
const isLoading = ref<boolean>(true);
const error = ref<string | null>(null);

const columnHelper = createColumnHelper<TopPlayers>();

const columns: ColumnDef<TopPlayers, any>[] = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Nama",
    cell: (info) =>
      h(
        "span",
        { class: "text-purple-400 font-bold text-lg hover:cursor-pointer" },
        info.getValue()
      ),
  }),
  columnHelper.accessor("participation", {
    header: "Participation",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("topping", {
    header: "Topping",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("gold", {
    header: "Gold",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("silver", {
    header: "Silver",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("bronze", {
    header: "Bronze",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("win", {
    header: "Menang",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("draw", {
    header: "Seri",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lose", {
    header: "Kalah",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("point", {
    header: "Poin",
    cell: (info) => info.getValue(),
  }),
];

onMounted(async () => {
  try {
    const res = await api.get<TopPlayers[]>("/api/duelists/top3");
    console.log("ini data top player tertingi ketiga", res.data);
    dataTopPlayers3.value = res.data;
  } catch (err: any) {
    console.error("Gagal fetch data:", err.message);
    error.value = "Gagal mengambil data pemain";
  } finally {
    isLoading.value = false;
  }
});

onMounted(async () => {
  try {
    const res = await api.get<TopPlayers[]>("/api/duelists/rest");
    console.log("ini data top player", res.data);
    dataTopPlayers.value = res.data;
  } catch (err: any) {
    console.error("Gagal fetch data:", err.message);
    error.value = "Gagal mengambil data pemain";
  } finally {
    isLoading.value = false;
  }
});
</script>
