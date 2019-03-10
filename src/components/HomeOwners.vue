<template>
<v-card>
    <v-card-title>
      Home Owners
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
  :items="homeowners"
  :loading="loading"
  :search="search"
  class="elevation-1">
    <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
    <template v-slot:items="props">
      <td class="text-xs-center">{{ props.item.idNumber }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.phoneNumber }}</td>
      <td>{{ props.item.email }}</td>
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
        { text: 'ID Number', value: 'idNumber' },
        { text: 'Name', value: 'name' },
        { text: 'Phone Number', value: 'phoneNumber' },
        { text: 'E-mail', value: 'email' },
      ],
      homeowners: [],
    };
  },
  methods: {
    async getHomeOwners() {
      axios.get('/homeowners')
        .then((result) => {
          this.homeowners = result.data.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
  },
  created() {
    this.getHomeOwners();
  },
};
</script>
