import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock1 from "./mock-data1"
import mock2 from "./mock-data2"

Vue.config.productionTip = false;

let data = {
  products_with_images: mock1,
  products_no_images: mock2,
  selected_product: null
}

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
