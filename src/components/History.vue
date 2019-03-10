<template>
  <v-card>
    <v-card-title>History
      <v-spacer></v-spacer>
      <v-text-field
      v-model="search"
      append-icon="search"
      label="Search"
      single-line hide-details/>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="intrusions"
      :loading="false"
      :search="search"
      class="elevation-1"
    >
      <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.homeSenseId }}</td>
        <td>{{ props.item.homeowner }}</td>
        <td class="text-xs-right">
          <v-chip v-if="props.item.intrusion" color="red" text-color="white">Intrusion</v-chip>
          <v-chip v-else color="blue" text-color="white">All was well</v-chip>
        </td>
        <td class="text-xs-right">
          <v-chip v-if="props.item.handled" color="green" text-color="white">Handled</v-chip>
          <v-chip v-else color="red" text-color="white">All was well</v-chip>
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
      headers: [
        { text: 'HomeSense ID', align: 'left', value: 'homeSenseId' },
        { text: 'Home Owner', value: 'homeowner' },
        { text: 'Intrusion?', value: 'intrusion' },
        { text: 'Handled?', value: 'enabled' },
      ],
      intrusions: [],
    };
  },
  methods: {
    getIntrusions() {
      axios
        .get('/homesenses')
        .then((result) => {
          this.intrusions = result.data.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
  },
  created() {
    this.getIntrusions();
  },
};
</script>
