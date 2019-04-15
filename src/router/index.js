import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Result from "@/components/Result";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/result",
      name: "result",
      component: Result
    }
  ]
});
