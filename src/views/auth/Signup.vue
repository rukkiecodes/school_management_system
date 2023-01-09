<template>
  <div class="mainContainer">
    <v-card width="350" max-width="95%" class="card" elevation="5">
      <v-card-text class="text-center pb-0 text-body-1 font-weight-medium"
        >Register</v-card-text
      >
      <v-card-subtitle class="text-center pt-0 text-caption"
        >Your credentials</v-card-subtitle
      >

      <v-card-text>
        <v-text-field
          density="compact"
          variant="outlined"
          placeholder="Name"
          prepend-inner-icon="mdi-account"
          v-model="register.credentials.name"
        />
        <v-text-field
          density="compact"
          variant="outlined"
          placeholder="Email"
          prepend-inner-icon="mdi-email"
          v-model="register.credentials.email"
        />
        <v-text-field
          density="compact"
          variant="outlined"
          type="password"
          placeholder="Password"
          prepend-inner-icon="mdi-lock"
          v-model="register.credentials.password"
        />
        <v-text-field
          density="compact"
          variant="outlined"
          placeholder="Subdomain"
          prepend-inner-icon="mdi-web"
          v-model="register.credentials.subdomain"
        />

        <v-file-input
          variant="outlined"
          density="compact"
          placeholder="Logo"
          hide-details
          @change="register.credentials.logo = $event.target.files[0]"
        />

        <v-card-actions class="px-0 mt-3">
          <v-btn
            @click="registerSchool"
            :loading="register.loading"
            class="text-capitalize bg-indigo"
            block
            >Register</v-btn
          >
        </v-card-actions>
      </v-card-text>
      <v-card-text class="text-caption pt-0 pb-3">
        If you're a student
        <router-link
          to="/studentLogin"
          class="text-decoration-none text-indigo font-weight-medium"
          >Click here</router-link
        >
        to login
      </v-card-text>
      <v-card-text class="text-caption pt-0">
        Or
        <router-link
          to="/studentResult"
          class="text-decoration-none text-indigo font-weight-medium"
          >Click here</router-link
        >
        to Check Result
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["registerSchool"]),
  },

  computed: {
    ...mapState(["register"]),
  },
};
</script>

<style scoped>
@import url(../../assets/styles/main.scss);
</style>
