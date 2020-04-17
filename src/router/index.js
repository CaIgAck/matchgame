import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/about.vue")
  },
  {
    path: "/easyLevel",
    name: "easyLevel",
    component: () => import("../views/easyLevel.vue")
  },
  {
    path: "/middleLevel",
    name: "middleLevel",
    component: () => import("../views/middleLevel.vue")
  },
  {
    path: "/hardLevel",
    name: "hardLevel",
    component: () => import("../views/hardLevel.vue")
  },
  {
    path: "/Finish",
    name: "Finish",
    component: () => import("../views/finish.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
