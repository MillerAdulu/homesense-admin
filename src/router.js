import Vue from 'vue';
import Router from 'vue-router';

import Login from './views/Login.vue';

import Admin from './Admin.vue';
import HomeSenses from './components/HomeSenses.vue';
import HomeOwners from './components/HomeOwners.vue';
import History from './components/History.vue';
import AddHomeOwner from './components/AddHomeOwner.vue';
import AddHomeSense from './components/AddHomeSense.vue';
import HomeSense from './components/HomeSense.vue';
import Realtime from './components/Realtime.vue';

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
        {
          path: 'homesenses',
          component: HomeSenses,
        },
        {
          path: 'homesense/:homesense',
          component: HomeSense,
        },
        {
          path: 'homeowners',
          component: HomeOwners,
        },
        {
          path: 'history',
          component: History,
        },
        {
          path: 'addhomeowner',
          component: AddHomeOwner,
        },
        {
          path: 'addhomesense',
          component: AddHomeSense,
        },
        {
          path: 'realtime',
          component: Realtime,
        },
      ],
    },
  ],
});
