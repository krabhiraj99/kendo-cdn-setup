import Vue from "vue";
import App from "./App.vue";

// Register the Kendo UI components

// Mount the app instance to the '#app' element
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
