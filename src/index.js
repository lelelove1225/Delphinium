import Vue from "vue";
import Hello from "./components/atoms/hello/Hello";

new Vue({
  el: "#app",
  components: {
    Hello
  },
  template: "<Hello></Hello>"
});
