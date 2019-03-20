<template>
<v-card>
    <v-card-title>
      HomeSenses
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  <v-data-table
  :headers="headers"
  :items="homesenses"
  :loading="loading"
  :search="search"
  class="elevation-1">
    <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
    <template v-slot:items="props">
      <td class="text-xs-center">{{ props.item.id }}</td>
      <td>{{ props.item.owner }}</td>
      <td class="text-xs-right">{{ props.item.area }} </td>
      <td class="text-xs-right">{{ props.item.notes }}</td>
      <td class="text-xs-center">
        <v-chip color="green" text-color="white">Enabled</v-chip>
      </td>
    </template>
  </v-data-table>
</v-card>
</template>

<script>
import axios from '@/utils/axios';

export default {
  data() {
    return {
      search: '',
      loading: true,
      headers: [
        { text: 'HomeSense ID', align: 'left', value: 'homeSenseId' },
        { text: 'Home Owner', value: 'homeowner' },
        { text: 'Area', value: 'area' },
        { text: 'Notes', value: 'notes' },
        { text: 'Enabled?', value: 'enabled' },
      ],
      homesenses: [],
    };
  },
  methods: {
    getHomeSenses() {
      axios.get('/homesenses')
        .then((result) => {
          this.homesenses = result.data.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
    goToRoute(item) {
      this.$router.push({ path: `homesense/${item.homeSenseId}` });
    },
  },
  created() {
    this.getHomeSenses();
  },
};
</script>
