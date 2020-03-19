import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/hospitals",
    name: "Hospital",
    component: () => import("../views/Hospital.vue")
  },
  {
    path: "/references",
    name: "References",
    component: () => import("../views/References.vue")
  },
  {
    path: "/hotlines",
    name: "Hotlines",
    component: () => import("../views/Hotlines.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
