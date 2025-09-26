import { createWebHistory, createRouter } from "vue-router";

import matchesView from "./views/matchesView.vue";
import topDeckView from "./views/topDeckView.vue";
import TopPlayersView from "./views/topPlayersView..vue";
import TournamentsView from "./views/tournamentsView.vue";
import HomeView from "./views/homeView.vue";
import TournamentsMatchView from "./views/tournamentsMatchView.vue";
import PlayerMatchView from "./views/playerMatchView.vue";


const routes = [
  { path: "/", component: HomeView },
  { path: "/matches", component: matchesView },
  { path: "/top-deck", component: topDeckView },
  { path: "/top-players", component: TopPlayersView },
  { path: "/player/:id/history-match", component: PlayerMatchView },
  { path: "/tournaments", component: TournamentsView },
  { path: "/tournaments/match/:id", component: TournamentsMatchView },
  // tidak perlu lazy load
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
