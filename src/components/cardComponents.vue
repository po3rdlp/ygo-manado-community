<template>
  <div
    @click="handleClick"
    class="card image-full w-full h-72 rounded-2xl shadow-2xl relative overflow-hidden cursor-pointer group transform transition-transform duration-300 hover:scale-105"
  >
    <figure class="absolute inset-0">
      <img :src="image" alt="img" class="object-cover w-full h-full" />
    </figure>
    <div class="card-body flex items-center justify-center relative z-10">
      <h2
        class="card-title text-center text-gray-300 text-2xl md:text-xl lg:text-2xl cursor-pointer group-hover:text-purple-400"
      >
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["click"]);

defineProps({
  image: {
    type: String,
  },
  title: {
    type: String,
    default: "null",
  },
});

const handleClick = () => {
  emit("click");
};
</script>
