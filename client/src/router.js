import Vue from "vue";
import Router from "vue-router";
import Search from "./components/Search.vue";
import Profile from "./components/Profile.vue";
import Frequently from "./components/Frequently.vue";
import Squads from "./components/Squads.vue";
import Team from "./components/Team.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "search",
      component: Search,
    },
    {
      path: "/profile/:platform/:gamertag",
      name: "profile",
      component: Profile,
    },
    {
      path: "/Frequently",
      name: "Frequently",
      component: Frequently,
    },
    {
      path: "/Squads",
      name: "Squads",
      component: Squads,
    },
    {
      path: "/Team/:platform/:full1/:full2/:full3/:full4/:full5",
      name: "Team",
      component: Team,
    },
  ],
});

