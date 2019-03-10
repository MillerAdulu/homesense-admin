import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/Login.vue';

import Admin from './components/Admin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '/',
        },
      ],
    },
  ],
});
