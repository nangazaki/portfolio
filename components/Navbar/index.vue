<template>
  <div
    :class="`lg:w-[380px] w-[50px] relative h-screen bg-[#170A17] backdrop-filter-[7px] flex flex-col justify-between`"
  >
    <div
      @click="menu.menuOpen(true)"
      class="absolute top-6 left-3 lg:left-60 cursor-pointer"
    >
      <Icon name="fluent:navigation-16-filled" font-size="24px" />
    </div>
    <div class="h-[50%]">
      <div class="w-full h-40 lg:h-[95%] bg-white"></div>
      <div
        class="w-full mt-7 flex flex-col lg:flex-row justify-center items-center gap-6"
      >
        <a href="https://facebook.com/heldercambuta0" target="_blank">
          <Icon name="uil:facebook" color="#E6E6E6" font-size="24px" />
        </a>
        <a
          href="https://www.linkedin.com/in/helder-cambuta-81668a192/"
          target="_blank"
        >
          <Icon name="uil:linkedin" color="#E6E6E6" font-size="24px" />
        </a>
        <a href="https://github.com/nangazaki" target="_blank">
          <Icon name="uil:github" color="#E6E6E6" font-size="24px" />
        </a>
        <a href="https://behance.com/heldercambuta" target="_blank">
          <Icon name="uil:behance" color="#E6E6E6" font-size="24px" />
        </a>
      </div>
    </div>
    <div
      class="copy px-4 py-6 text-xs text-center text-[#E6E6E6] font-[Oxanium] orientat"
    >
      <p>&copy;Copyright {{ date }}</p>
    </div>
  </div>
  <Menu />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMenuStore } from "~~/store/menu";

const menu = useMenuStore();
const date = new Date().getFullYear();

menu.menuOpen(true);
menu.menuClose(false);

const isOpen = ref(true);

function updateMenu() {
  isOpen.value = !isOpen.value;
}

onMounted(() => {}), onUpdated(() => {});
</script>


<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
  .copy {
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
}
</style>