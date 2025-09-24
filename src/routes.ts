import { createWebHistory, createRouter } from "vue-router";

import matchesView from "./views/matchesView.vue";
import topDeckView from "./views/topDeckView.vue";
import TopPlayersView from "./views/topPlayersView..vue";
import TournamentsView from "./views/tournamentsView.vue";
import HomeView from "./views/homeView.vue";


const routes = [
  { path: "/", component: HomeView },
  { path: "/matches", component: matchesView },
  { path: "/top-deck", component: topDeckView },
  { path: "/top-players", component: TopPlayersView },
  { path: "/tournaments", component: TournamentsView },
  // tidak perlu lazy load
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
