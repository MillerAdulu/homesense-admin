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
export default {
  data: () => ({
    valid: true,
    idNumber: '',
    name: '',
    email: '',
    phoneNumber: '',
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
