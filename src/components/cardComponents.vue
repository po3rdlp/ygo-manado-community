<template>
  <div
    @click="handleClick"
    class="card image-full w-72 h-44 md:w-80 md:h-48 lg:w-88 lg:h-52 xl:w-96 xl:h-56 rounded-2xl shadow-2xl relative overflow-hidden cursor-pointer group transform transition-transform duration-300 hover:scale-105"
  >
    <figure class="absolute inset-0">
      <img :src="image" alt="img" class="object-cover w-full h-full" />
    </figure>
    <div class="card-body flex items-center justify-center relative z-10">
      <h2
        class="card-title text-center text-gray-300 text-2xl md:text-3xl lg:text-4xl cursor-pointer group-hover:text-purple-400"
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
