<template>
  <div class="mainContainer">
    <v-card width="350" max-width="95%" class="card">
      <v-card-text class="text-center pt-6">
        <img src="@/assets/images/logo.png" class="logo" />
      </v-card-text>

      <v-card-text class="text-center pb-0 text-body-1 font-weight-medium"
        >Staff Login</v-card-text
      >
      <v-card-subtitle class="text-center pt-0 text-caption"
        >Your credentials</v-card-subtitle
      >

      <v-card-text>
        <v-text-field
          placeholder="Login code"
          density="compact"
          variant="outlined"
          v-model="staffLogin.logincode"
          prepend-inner-icon="mdi-lock"
        />

        <v-card-actions class="px-0">
          <v-btn
            block
            @click="signinStaff"
            :loading="staffLogin.loading"
            class="text-capitalize bg-indigo"
            >Login</v-btn
          >
        </v-card-actions>
      </v-card-text>
      <v-card-text class="text-caption pt-0 pb-3">
        If you're a student
        <router-link
          to="/staffLogin"
          class="text-decoration-none text-indigo-accent-4 font-weight-medium"
          >Click here</router-link
        >
        to login
      </v-card-text>
      <v-card-text class="text-caption pt-0">
        Or
        <router-link
          to="/studentResult"
          class="text-decoration-none text-indigo-accent-4 font-weight-medium"
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
    ...mapActions(["signinStaff"]),
  },

  computed: {
    ...mapState(["staffLogin"]),
  },
};
</script>
  
  <style scoped>
@import url(@/assets/styles/main.scss);
</style>