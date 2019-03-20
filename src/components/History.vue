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
        <td class="text-xs-center">{{ props.item.id }}</td>
        <td>
          <v-chip v-if="props.item.intrusion == true"
          color="red" text-color="white">Intrusion</v-chip>
          <v-chip v-else color="green" text-color="white">Nothing much</v-chip>
          </td>
        <td>{{ props.item.homesense.area}}</td>
        <td>{{ props.item.homesense.notes}}</td>
        <td>
          <v-chip v-if="props.item.intrusion == true"
          color="green" text-color="white">Handled</v-chip>
          <v-chip v-else color="blue" text-color="white">Nothing much</v-chip>
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
        { text: 'Intrusion ID', align: 'left', value: 'id' },
        { text: 'Intrusion', value: 'intrusion' },
        { text: 'Area', value: 'area' },
        { text: 'Notes', value: 'notes' },
        { text: 'Handled?', value: 'enabled' },
      ],
      intrusions: [],
    };
  },
  methods: {
    getIntrusions() {
      axios
        .get('/intrusions')
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
