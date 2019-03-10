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
  :items="desserts"
  :loading="false"
  :search="search"
  class="elevation-1">
    <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
    <template v-slot:items="props">
      <td class="text-xs-center">{{ props.item.homeSenseId }}</td>
      <td class="text-xs-right">{{ props.item.homeowner }}</td>
      <td class="text-xs-right">
        <v-chip v-if="props.item.paid" color="green" text-color="white">Paid</v-chip>
        <v-chip v-else color="red" text-color="white">Pending Payment</v-chip>
      </td>
      <td class="text-xs-right">
        <v-chip v-if="props.item.enabled" color="green" text-color="white">Enabled</v-chip>
        <v-chip v-else color="red" text-color="white">Offline</v-chip>
      </td>
      <td class="text-xs-center">
        <v-chip v-if="props.item.condition" color="green" text-color="white">Perfect</v-chip>
        <v-chip v-else color="red" text-color="white">Damaged</v-chip>
      </td>
      <td class="text-xs-right">
        <v-chip v-if="props.item.intrusion" color="red" text-color="white">Intrusion</v-chip>
        <v-chip v-else color="blue" text-color="white">All is well</v-chip>
      </td>
      <td class="justify-center">
        <v-btn color="blue">View</v-btn>
      </td>
    </template>
  </v-data-table>
</v-card>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'HomeSense ID', align: 'left', value: 'homeSenseId' },
        { text: 'Home Owner', value: 'homeowner' },
        { text: 'Enabled?', value: 'enabled' },
        { text: 'Paid?', value: 'paid' },
        { text: 'Condition?', value: 'condition' },
        { text: 'Intrusion?', value: 'intrusion' },
        { text: 'Actions', value: '' },
      ],
      desserts: [
        {
          homeSenseId: 'Frozen Yogurt',
          homeowner: 159,
          enabled: true,
          paid: true,
          condition: true,
          intrusion: true,
        },
        {
          homeSenseId: 'Frozen Yogurt',
          homeowner: 159,
          enabled: true,
          paid: true,
          condition: true,
          intrusion: false,
        },
        {
          homeSenseId: 'Frozen Yogurt',
          homeowner: 159,
          enabled: true,
          paid: true,
          condition: true,
          intrusion: false,
        },
      ],
    };
  },
};
</script>
