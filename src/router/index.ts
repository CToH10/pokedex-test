import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PokeListView from "@/views/PokeListView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: PokeListView,
  },
  {
    path: "/myTeam",
    name: "myTeam",
    // route level code-splitting
    // this generates a separate chunk (myTeam.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "myTeam" */ "../views/MyTeamView.vue"),
  },
  {
    path: "/pokemon/:pokeName",
    name: "singlePokemon",
    // route level code-splitting
    // this generates a separate chunk (singlePokemon.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "singlePokemon" */ "../views/PokemonView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
