<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-list dense>
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="goToLink(item)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">HomeSense</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img src="./assets/logo.svg" alt="Vuetify">
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import messaging from './utils/firebase';
import store from './store';

messaging.usePublicVapidKey(
  'BDysUjcSEaqxjlwpzBzmc38VpIvRhovUwqYchknwushljDKtEN-cy06lDbBAUquywivC0txRmO1aY8iP8P01XIY',
);
messaging
  .requestPermission()
  .then(() => {
    console.log('Notification permissions granted');
  })
  .catch((error) => {
    console.log('Unable to get permissions to notify.', error);
  });
messaging.getToken()
  .then((token) => {
    console.log(`Token is: ${token}`);
  }).catch((error) => {
    console.log('Error', error);
  });

messaging.onMessage((payload) => {
  store.state.intrusions.push(payload.data);
});

export default {
  data: () => ({
    drawer: true,
    items: [
      { icon: 'contacts', text: 'Home Owners', path: 'homeowners' },
      { icon: 'settings', text: 'Home Senses', path: 'homesenses' },
      { icon: 'history', text: 'History', path: 'history' },
      { icon: 'add', text: 'Add Homeowner', path: 'addhomeowner' },
      { icon: 'add', text: 'Add HomeSense', path: 'addhomesense' },
    ],
  }),
  methods: {
    goToLink(item) {
      this.$router.push({ path: `/admin/${item.path}` });
    },
  },
};
</script>
