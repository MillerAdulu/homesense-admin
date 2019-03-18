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
        <td>{{ props.item.parsed.area }}</td>
        <td>{{ props.item.parsed.notes}}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'Realtime',
  data() {
    return {
      search: '',
      headers: [
        { text: 'Homesense ID', align: 'left', value: 'id' },
        { text: 'Area', value: 'parsed.area' },
        { text: 'Notes', value: 'parsed.notes' },
      ],
    };
  },
  computed: {
    intrusions() {
      return this.$store.getters.intrusions;
    },
  },
};
</script>
