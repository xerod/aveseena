import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "voie-pages";
import "virtual:windi.css";
import "./global.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App).use(router);

app.mount("#app");
