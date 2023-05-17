import {createRouter,createWebHistory} from "vue-router";
import powerView from "@/pages/power-view.vue";

const router=createRouter({
  history:createWebHistory(import.meta.BASE_URL),
  routes:[
    {
      path:'/',
      name:"powerView",
      component: powerView,
    }
  ]
})

export default router