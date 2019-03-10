<template>
    <v-card>
        {{ homesense }}
    </v-card>
</template>

<script>
import axios from '@/utils/axios';

export default {
  data() {
    return {
      homesense: null,
    };
  },
  methods: {
    fetchHomeSense() {
      axios.get(`homesenses/${this.$route.params.homesense}`)
        .then((result) => {
          this.homesense = result.data.data;
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchHomeSense();
  },
};
</script>
