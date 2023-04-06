<template>
  <div class="w-full h-screen overflow-auto p-10">
    <section class="w-full text-white">
      <div class="w-full mb-12">
        <h1 class="text-5xl text-[#681068] mb-6">#Portfolio</h1>
        <p>A seguir estao alguns dos meus trabalhos</p>
      </div>
      <div class="py-8 border-t">
        <div class="flex gap-6 text-[#CBCBCB]">
          <nuxt-link class="text-white" to="#"> Todos </nuxt-link>
          <nuxt-link to="#"> Frontend </nuxt-link>
          <nuxt-link to="#"> UI Design </nuxt-link>
          <nuxt-link to="#"> Landing Pages </nuxt-link>
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          teste
        </div>
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