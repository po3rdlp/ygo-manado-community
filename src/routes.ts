import { createWebHistory, createRouter } from "vue-router";

import matchesView from "./views/matchesView.vue";
import topDeckView from "./views/topDeckView.vue";
import TopPlayersView from "./views/topPlayersView..vue";
import TournamentsView from "./views/tournamentsView.vue";
import HomeView from "./views/homeView.vue";
import TournamentsMatchView from "./views/tournamentsMatchView.vue";
import PlayerMatchView from "./views/playerMatchView.vue";
import notFoundView from "./views/notFoundView.vue";
import AboutView from "./views/aboutView.vue";
import DeckByIdView from "./views/deckByIdView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/matches", component: matchesView },
    { path: "/deck/:id", component: DeckByIdView },
  { path: "/top-deck", component: topDeckView },
  { path: "/top-players", component: TopPlayersView },
  { path: "/player/:id/history-match", component: PlayerMatchView },
  { path: "/tournaments", component: TournamentsView },
  { path: "/tournaments/match/:id", component: TournamentsMatchView },

  // fallback not found page
  { path: "/:pathMatch(.*)*", name: "NotFound", component: notFoundView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});
