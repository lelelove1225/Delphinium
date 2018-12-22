import Vue from "vue";
import Router from "vue-router";
import BlogHome from "@/components/organisms/BlogHome";
import BlogPost from "@/components/organisms/BlogPost";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/blog/",
      name: "blog-home",
      component: BlogHome
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost
    }
  ]
});
