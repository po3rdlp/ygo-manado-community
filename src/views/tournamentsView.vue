<template>
  <div class="h-full">
    <div class="p-3">
      <h1 class="text-xl font-bold mb-4 text-cyan-400">Tournaments :</h1>

      <div v-if="isLoading" class="text-white"><loadingComponents /></div>
      <div
        v-else-if="error"
        class="bg-red-500/20 border border-red-400/50 text-red-300 px-3 py-2 rounded text-sm"
      >
        {{ error }}
      </div>
      <div v-else>
        <TableComponents
          :data="dataTournaments"
          :columns="columns"
          :show-search="false"
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
import loadingComponents from "@/components/loadingComponents.vue";
import { TournamentsList } from "@/types/data.types";
import { useRouter } from "vue-router";

const router = useRouter();

const dataTournaments = ref<TournamentsList[]>([]);
const isLoading = ref<boolean>(true);
const error = ref<string | null>(null);

const columnHelper = createColumnHelper<TournamentsList>();

const columns: ColumnDef<TournamentsList, any>[] = [
  columnHelper.accessor("name", {
    header: "Nama",
    cell: (info) =>
      h(
        "span",
        {
          class:
            "text-purple-400 font-bold text-lg hover:cursor-pointer hover:underline",
          onClick: () => {
            const id = info.row.original.id;
            router.push(`/tournaments/match/${id}`);
          },
        },
        info.getValue()
      ),
  }),
  columnHelper.accessor("format", {
    header: "Format",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("banlist", {
    header: "Banlist",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("top1", {
    header: "Top 1",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("top2", {
    header: "Top 2",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("top3", {
    header: "Top 3",
    cell: (info) => info.getValue(),
  }),
];

onMounted(async () => {
  try {
    const res = await api.get<TournamentsList[]>("/api/tournaments/list");
    console.log("Data Tournaments : ", res.data);
    dataTournaments.value = res.data;
  } catch (err: any) {
    console.error("Gagal fetch data:", err.message);
    error.value = "Gagal mengambil data tournament";
  } finally {
    isLoading.value = false;
  }
});
</script>
