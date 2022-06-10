import Vue from "vue";

Vue.filter("formatPrice", function(value) {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
});
