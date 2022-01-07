import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/scroll',
    name:"Scroll", //首页翻页
    component:() => import('../views/home/scroll.vue')
  },
  {
    path:'/user',
    name:"User", //个人中心
    component:() => import('../views/user/user.vue')
  },
  {
    path:'/register',
    name:"Register", //注册
    component:() => import('../views/user/register.vue')
  },
  {
    path:'/login',
    name:"Login", //登录
    component:() => import('../views/user/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
