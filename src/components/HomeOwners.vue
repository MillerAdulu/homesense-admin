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
  :items="desserts"
  :loading="false"
  :search="search"
  class="elevation-1">
    <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
    <template v-slot:items="props">
      <td class="text-xs-center">{{ props.item.idNumber }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.phoneNumber }}</td>
      <td>{{ props.item.email }}</td>
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
        { text: 'ID Number', value: 'idNumber' },
        { text: 'Name', value: 'name' },
        { text: 'Phone Number', value: 'phoneNumber' },
        { text: 'E-mail', value: 'email' },
        { text: 'Actions', value: '' },
      ],
      desserts: [
        {
          idNumber: 1,
          name: 'Frozen',
          phoneNumber: 12345678,
          email: 'mail@mail.com',
        },
        {
          idNumber: 1,
          name: 'Frozen',
          phoneNumber: 12345678,
          email: 'mail@mail.com',
        },
        {
          idNumber: 1,
          name: 'Frozen',
          phoneNumber: 12345678,
          email: 'mail@mail.com',
        },
      ],
    };
  },
};
</script>
