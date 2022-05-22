import { createRouter, createWebHistory } from "vue-router";
import DebuggingView from "../views/DebuggingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "debugging",
      component: DebuggingView,
    }
  ],
});

export default router;
