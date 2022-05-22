import { defineStore, acceptHMRUpdate } from "pinia";

export const useAppStore = defineStore({
  id: "app",
  state: () => {
    return {
      scripts: []
    }
  },
  getters: {
    getScripts: (state) => state.scripts,
  },
  actions: {
    setScripts(scripts) {
      this.scripts = scripts
    },
  },
});
