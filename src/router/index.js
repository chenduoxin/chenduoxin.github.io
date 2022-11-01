import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components//main/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue'),
      },
      {
        path: '/study',
        name: 'study',
        component: () => import('../views/study/study.vue')
      },
      {
        path: '/js',
        name: 'js',
        component: () => import('../views/note/js'),
        children: [
          {
            path: '/jsTv',
            name: 'jsTv',
            component: () => import('../views/note/jsMain/jsTv.vue')
          },
          {
            path: '/jsBook',
            name: 'jsBook',
            component: () => import('../views/note/jsMain/jsBook.vue')
          },
          {
            path: '/jsStudy',
            name: 'jsStudy',
            component: () => import('../views/note/jsMain/jsStudy.vue')
          },
        ]
      },
      {
        path: '/ts',
        name: 'ts',
        component: () => import('../views/note/ts.vue')
      },
      {
        path: '/nodejs',
        name: 'nodejs',
        component: () => import('../views/note/nodejs.vue')
      },
      {
        path: '/vue2.0',
        name: 'vue2.0',
        component: () => import('../views/note/vue2.0.vue')
      },
      {
        path: '/uniApp',
        name: 'uniApp',
        component: () => import('../views/note/uniApp.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login/login.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})


const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
