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
              <v-autocomplete
              placeholder="Home Owner"
              :items="homeowners"
              item-text="name"
              item-value="id"
              v-model="homeowner" />
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
            <v-btn
            :loading="loading"
            block
            color="green white--text"
            @click="addHomeSense">Add</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from '@/utils/axios';

export default {
  data() {
    return {
      loading: false,
      homeowner: '',
      longitude: '',
      latitude: '',
      area: '',
      notes: '',
      homeowners: [],
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
  methods: {
    addHomeSense() {
      const data = {
        home_sense: {
          area: this.area,
          latitude: this.latitude,
          longitude: this.longitude,
          notes: this.notes,
          homeowner_id: this.homeowner,
        },
      };

      this.loading = true;
      axios.post('homesenses', JSON.stringify(data))
        .then((result) => {
          console.log(result.data);
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
    getHomeOwners() {
      axios.get('homeowners')
        .then((result) => {
          this.homeowners = result.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getHomeOwners();
  },
};
</script>
