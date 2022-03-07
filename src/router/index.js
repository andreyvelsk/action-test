import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/views/SettingsView.vue"),
  },
  {
    path: "/settings/:id",
    name: "settings.panel",
    component: () => import("@/views/PanelSettings.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
