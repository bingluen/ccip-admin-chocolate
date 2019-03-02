import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard 儀表板',
      component: Home,
    },
    {
      path: '/checkin',
      name: 'Check-in 報到',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CheckIn.vue'),
    },
    {
      path: '/lunch',
      name: 'Lunch 午餐領取',
      component: () => import(/* webpackChunkName: "about" */ './views/Lunch.vue'),
    },
    {
      path: '/announcement',
      name: 'Announcement 大會公告',
      component: () => import(/* webpackChunkName: "about" */ './views/Announcement.vue'),
    },
    {
      path: '/notification',
      name: 'Notification 推播訊息',
      component: () => import(/* webpackChunkName: "about" */ './views/Notification.vue'),
    },
  ],
});
