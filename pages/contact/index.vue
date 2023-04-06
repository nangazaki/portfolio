<template>
  <div class="p-10">
    <section class="text-white">
      <h1>#Sobre</h1>
      <p>
        Eu sou Helder Cambuta, sou Desenvolvedor Web e UI Designer. Desenvolvo
        interfaces modernas e de alta qualidade, com foco em performance,
        responsividade e SEO.
      </p>
      <p>
        Tenho habilidades no uso de softwares de design como Figma e Adobe XD.
      </p>

      <div class="flex gap-8">
        <nuxt-link to="/contact">
          <button class="px-6 py-3 bg-[#7B167A] rounded">
            Mbora conversar?
          </button>
        </nuxt-link>
        <button class="px-6 py-3 rounded border border-[#7B167A]">
          Baixar CV
        </button>
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