import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

export enum ERouterName {
  exam='exam',
  result='result',
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: ERouterName.exam,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/exam/Index.vue')
  },
  {
    path: '/exam',
    name: ERouterName.exam,
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/exam/Index.vue')
  },
  {
    path: '/result',
    name: ERouterName.result,
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/result/Index.vue')
  },
  
  // This must be the last route to catch all other paths
  { path: "*", redirect: "/" },
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
