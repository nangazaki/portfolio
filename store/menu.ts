import { defineStore } from "pinia";

interface State {
  menuIsOpen: boolean;
}

export const useMenuStore = defineStore("menuStore", {
  state: (): State => ({
    menuIsOpen: false,
  }),
  getters: {
    getMenu: (state) => state.menuIsOpen,
  },
  actions: {
    menuOpen(payload: boolean) {
      this.menuIsOpen = payload;
    },
    menuClose(payload: boolean) {
      this.menuIsOpen = payload;
    },
  },
});
