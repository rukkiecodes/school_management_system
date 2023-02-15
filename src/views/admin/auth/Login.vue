<template>
  <div class="mainContainer bg-indigo-lighten-5">
    <v-card width="350" max-width="95%" class="card" elevation="2">
      <v-card-text class="text-center pt-6">
        <img src="@/assets/images/logo.png" class="logo" />
      </v-card-text>

      <v-card-text class="text-center pb-0 text-body-1 font-weight-medium"
        >Admin Login</v-card-text
      >
      <v-card-subtitle class="text-center pt-0 text-caption"
        >Your credentials</v-card-subtitle
      >

      <v-card-text>
        <v-text-field
          placeholder="Username"
          density="compact"
          variant="outlined"
          v-model="adminLogin.email"
          prepend-inner-icon="mdi-account"
        />
        <v-text-field
          hide-details
          placeholder="Password"
          type="password"
          density="compact"
          variant="outlined"
          prepend-inner-icon="mdi-lock"
          v-model="adminLogin.password"
        />

        <v-card-actions class="px-0">
          <v-checkbox
            density="compact"
            placeholder="Remember"
            hide-details
          ></v-checkbox>
          <v-spacer />
          <router-link
            to="/forgotPassword"
            class="text-decoration-none text-indigo"
            >Forgot password?</router-link
          >
        </v-card-actions>

        <v-card-actions class="px-0">
          <v-btn
            block
            @click="signinUser"
            :loading="adminLogin.loading"
            class="text-capitalize bg-indigo-accent-4"
            >Login</v-btn
          >
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["signinUser"]),
  },

  computed: {
    ...mapState(["adminLogin"]),
  },
};
</script>

<style scoped>
@import url(@/assets/styles/main.scss);
</style>