import Vue from "vue";
import Hello from "./components/Hello.vue";

new Vue({
  el: "#app",
  components: {
    Hello
  },
  template: "<Hello></Hello>"
});
