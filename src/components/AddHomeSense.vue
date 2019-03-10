<template>
  <v-dialog v-model="homedialog" width="1000px">
    <v-card>
      <v-card-title class="grey lighten-4 py-4 title">Add HomeSense</v-card-title>
      <v-container grid-list-sm class="pa-4">
        <v-layout row wrap>
          <v-flex xs12 align-center justify-space-between>
            <v-layout align-center>
              <v-avatar size="40px" class="mr-3">
                <img src="../assets/logo.svg" alt>
              </v-avatar>
              <v-text-field placeholder="Home Owner" v-model="homeowner"></v-text-field>
            </v-layout>
          </v-flex>
          <v-flex xs6>
            <v-text-field prepend-icon="map" placeholder="Longitude" v-model="longitude"/>
          </v-flex>
          <v-flex xs6>
            <v-text-field placeholder="Latitude" v-model="latitude"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field prepend-icon="map" placeholder="Area" v-model="area"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field prepend-icon="notes" placeholder="Notes" v-model="notes"></v-text-field>
          </v-flex>
          <v-flex>
            <v-btn block color="green">Add</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      homeowner: '',
      longitude: '',
      latitude: '',
      area: '',
      notes: '',
    };
  },
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    homedialog() {
      return this.dialog;
    },
  },
};
</script>
