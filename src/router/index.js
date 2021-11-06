import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Shop from "../views/Shop.vue";
import Schedule from "../views/Schedule.vue"
import Contact from "../views/Contact"
import FAQ from "../views/FAQ"
import VueCalendly from 'vue-calendly';

Vue.use(VueCalendly);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
    {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
    {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
