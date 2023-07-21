import Vue from "vue";
import App from "./App.vue";

// Register the Kendo UI components

// Mount the app instance to the '#app' element
Vue.config.productionTip = false;
Vue.component('k-grid', window.KendoVueGrid.Grid);
Vue.component('k-dropdownlist', window.KendoVueDropdowns.DropDownList);
Vue.component('k-input',window.KendoVueInputs.Input);

console.log("Vue.options", Vue.options);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
