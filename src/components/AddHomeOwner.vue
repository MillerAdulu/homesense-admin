<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-text-field
      v-model="idNumber"
      label="ID Number"
      required
    ></v-text-field>

<v-text-field
      v-model="name"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="phoneNumber"
      label="Phone Number"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      :loading="loading"
      color="success"
      @click="validate"
    >
      Add
    </v-btn>

    <v-btn
      color="error"
      @click="reset"
    >
      Cancel
    </v-btn>
  </v-form>
</template>

<script>
import axios from '@/utils/axios';

export default {
  data: () => ({
    loading: false,
    valid: true,
    email: '',
    idNumber: '',
    name: '',
    phoneNumber: '',
  }),

  methods: {
    validate() {
      const data = {
        home_owner: {
          email: this.email,
          id_number: this.idNumber,
          name: this.name,
          phone_number: this.phoneNumber,
        },
      };

      this.loading = true;
      axios.post('homeowners', JSON.stringify(data))
        .then((result) => {
          console.log(result.data);
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
