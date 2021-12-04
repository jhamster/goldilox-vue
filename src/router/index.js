import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Shop from "../views/Shop.vue";
import Schedule from "../views/Schedule.vue";
import Contact from "../views/Contact";
import FAQ from "../views/FAQ";
import Reviews from "../views/Reviews";
import NewReview from "../views/NewReview";
import VueCalendly from "vue-calendly";

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
  {
    path: "/reviews",
    name: "Reviews",
    component: Reviews,
  },
  {
    path: "/newreview",
    name: "NewReview",
    component: NewReview,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
