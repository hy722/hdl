import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index/Index.vue'
import Produ from '../components/Produ.vue'
import Login from "../components/Logins.vue"
import Reg from "../components/Reg.vue"
import order from "../components/index/common/orderIndex.vue"
import pingjia from "../components/index/common/pingjia1.vue"//评价

Vue.use(VueRouter)
const routes = [
  // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  {path:'/',component:Index},
  {path:'/Produ',component:Produ},
  {path:"/login",component:Login},
  {path:"/reg",component:Reg},
  {path:"/order",component:order},
  {path:"/pingjia",component:pingjia}//评价
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
