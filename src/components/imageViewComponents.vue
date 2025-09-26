<template>
  <div
    v-if="imageUrl"
    class="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
    @click.self="closeModal"
  >
    <img
      :src="imageUrl"
      class="max-w-full max-h-full rounded-lg shadow-lg"
      alt="Deck Image"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  imageUrl: string | null;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const closeModal = () => {
  emit("close");
};
</script>
