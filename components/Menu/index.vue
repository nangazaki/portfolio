<template>
  <div
    v-if="menu.getMenu"
    class="fixed w-full h-screen flex items-center justify-center"
  >
    <div
      class="absolute -z-10 w-full h-screen bg-[#170a178f] backdrop-blur-2xl"
    ></div>
    <div @click="menu.menuClose(false)" class="menu-close">X</div>
    <nav
      class="flex flex-col items-center gap-6 text-lg text-white font-[Oxanium]"
    >
      <nuxt-link to="/">Pagina Inicial</nuxt-link>
      <nuxt-link to="/about">Sobre</nuxt-link>
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
      <nuxt-link to="/contact">Contacto</nuxt-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from "~~/store/menu";

const menu = useMenuStore();

menu.menuClose(false);
</script>
