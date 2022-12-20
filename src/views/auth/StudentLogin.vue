<template>
    <div class="mainContainer">
      <v-card width="350" max-width="95%" class="card">
        <v-card-text class="text-center pt-6">
          <img src="../../assets/images/logo.png" class="logo" />
        </v-card-text>
  
        <v-card-text class="text-center pb-0 text-body-1 font-weight-medium"
          >Student's Login</v-card-text
        >
        <v-card-subtitle class="text-center pt-0 text-caption"
          >Your credentials</v-card-subtitle
        >
  
        <v-card-text>
          <v-text-field
            density="compact"
            variant="outlined"
            label="Username"
            prepend-inner-icon="mdi-account"
          />
          <v-text-field
            density="compact"
            variant="outlined"
            label="Password"
            prepend-inner-icon="mdi-lock"
            hide-details
          />
  
          <v-card-actions class="px-0">
            <v-checkbox
              density="compact"
              label="Remember"
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
            <v-btn class="text-capitalize bg-indigo" block>Login</v-btn>
          </v-card-actions>
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
  export default {};
  </script>
  
  <style scoped>
  @import url(../../assets/styles/main.scss);
  </style>