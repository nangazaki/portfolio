<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="p-6 text-white">
      <h3 class="font-[Oxanium] text-2xl text-[#dbdbdb] mb-3">Hello World!</h3>
      <h1 class="font-[Oxanium] text-5xl text-[#7B167A] mb-3">
        Helder Cambuta
      </h1>
      <p class="font-[Oxanium] text-lg text-[#E6E6E6] mb-6">
        Frontend & UI Designer
      </p>
      <div class="flex flex-col gap-4 md:flex-row md:gap-8">
        <button class="font-[Oxanium] px-6 py-3 bg-[#7B167A] rounded">
          Mbora conversar?
        </button>
        <button
          class="font-[Oxanium] px-6 py-3 rounded border border-[#7B167A]"
        >
          Baixar CV
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from "~~/store/menu";

const menu = useMenuStore();

onMounted(() => {
  menu.menuClose(false);
});
</script>