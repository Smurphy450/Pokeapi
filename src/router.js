import Vue from "vue";
import Router from "vue-router";
import home from "./pages/home.vue";
import pokemon from "./pages/pokemon.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/pokemon",
      name: "pokemon",
      component: pokemon
    }
  ]
});