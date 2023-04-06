<template>
  <div class="w-full h-screen overflow-auto py-10 px-6 lg:p-10">
    <section class="w-full text-[#f2f2f2]">
      <h1 class="text-3xl lg:text-5xl text-[#681068] mb-4 font-[Oxanium]">
        #Sobre
      </h1>
      <p class="leading-6">
        Olá, meu nome é Helder Cambuta, sou Desenvolvedor Web Júnior e UI
        Designer. Desenvolvo interfaces modernas e de alta qualidade, com foco
        em performance, responsividade e SEO.
      </p>
      <p class="leading-6">
        Tenho habilidades no uso de softwares de design e prototipação como
        Figma.
      </p>

      <div class="flex gap-8 mt-6">
        <nuxt-link to="/contact">
          <button
            class="px-4 py-2 font-[Oxanium] text-sm lg:px-6 lg:py-3 lg:text-base rounded bg-[#7B167A]"
          >
            Mbora conversar?
          </button>
        </nuxt-link>
        <button
          class="px-4 py-2 font-[Oxanium] text-sm lg:px-6 lg:py-3 lg:text-base rounded border border-[#7B167A]"
        >
          Baixar CV
        </button>
      </div>
    </section>
    <section class="py-8 text-white">
      <div class="pt-8 border-t border-[#4e364e]">
        <h2 class="font-[Oxanium] text-3xl mb-6">
          <span class="text-[#681068]">#</span>Serviços
        </h2>
        <div class="flex flex-col gap-6 md:flex-row lg:justify-between">
          <div
            class="w-full h-[300px] bg-[#170A17] border-b-4 border-[#681068]"
          ></div>
          <div
            class="w-full h-[300px] bg-[#170A17] border-b-4 border-[#681068]"
          ></div>
          <div
            class="w-full h-[300px] bg-[#170A17] border-b-4 border-[#681068]"
          ></div>
        </div>
      </div>
    </section>
    <section class="py-8 text-white">
      <div class="py-8 border-t border-[#4e364e]">
        <h2 class="font-[Oxanium] text-3xl">
          <span class="text-[#681068]">#</span>Habilidades
        </h2>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from "~~/store/menu";

const menu = useMenuStore();

onMounted(() => {
  menu.menuClose(false);
});
</script>