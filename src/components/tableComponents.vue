<template>
  <div class="space-y-4">
    <input
      v-if="props.showSearch ?? true"
      v-model="search"
      type="text"
      placeholder="Cari..."
      class="border border-purple-500/50 bg-black/40 text-gray-200 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
    />

    <div
      v-if="table.getRowModel().rows.length > 0"
      class="overflow-x-auto border border-purple-800/40 rounded-lg shadow-lg"
    >
      <table class="min-w-full text-sm text-left">
        <thead
          class="bg-gradient-to-r from-purple-900/90 via-indigo-950 to-black text-white"
        >
          <tr
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <th
              v-for="header in headerGroup.headers"
              :key="header.id"
              class="px-4 py-3 font-semibold tracking-wide border-b border-purple-800/60 cursor-pointer select-none"
              @click="header.column.getToggleSortingHandler()?.($event)"
            >
              <span>
                <FlexRender
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
              </span>
              <span v-if="header.column.getIsSorted() === 'asc'"> ▲</span>
              <span v-else-if="header.column.getIsSorted() === 'desc'"> ▼</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, idx) in table.getRowModel().rows"
            :key="row.id"
            :class="[
              idx % 2 === 0 ? 'bg-black/40' : 'bg-purple-950/30',
              'hover:bg-cyan-900/30 transition-colors border-t border-purple-800/30',
            ]"
          >
            <td
              v-for="cell in row.getVisibleCells()"
              :key="cell.id"
              class="px-4 py-2 text-gray-200"
            >
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-else
      class="text-center text-gray-400 py-6 border border-purple-800/40 rounded-lg bg-black/40"
    >
      Tidak ada data
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import {
  useVueTable,
  getCoreRowModel,
  getSortedRowModel,
  FlexRender,
  type ColumnDef,
  type SortingState,
} from "@tanstack/vue-table";

const props = defineProps<{
  data: any[];
  columns: ColumnDef<any, any>[];
  showSearch?: boolean;
}>();

const search = ref("");
const sorting = ref<SortingState>([]);

const filteredData = computed(() => {
  if (!search.value) return props.data;
  return props.data.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(search.value.toLowerCase())
  );
});

const table = useVueTable({
  data: filteredData.value,
  columns: props.columns,
  state: {
    get sorting() {
      return sorting.value;
    },
    set sorting(val: SortingState) {
      sorting.value = val;
    },
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
});

watch(filteredData, (newData) => {
  table.setOptions((prev) => ({
    ...prev,
    data: newData,
  }));
});
</script>
