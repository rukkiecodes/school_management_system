<template>
  <div class="mainContainer">
    <v-card width="350" max-width="95%" class="card">
      <v-card-text class="text-center pt-6">
        <img src="../../assets/images/logo.png" class="logo" />
      </v-card-text>

      <v-card-text class="text-center pb-0 text-body-1 font-weight-medium"
        >Check Student's Result</v-card-text
      >
      <v-card-subtitle class="text-center pt-0 text-caption"
        >Your credentials</v-card-subtitle
      >

      <v-card-text>
        <v-select
          placeholder="Student name"
          variant="outlined"
          density="compact"
          :items="['Student name']"
        />
        <v-select
          placeholder="Term"
          variant="outlined"
          density="compact"
          :items="[
            '2018/2019 - Third Term',
            '2018/2019 - Second Term',
            '2018/2019 - First Term',
          ]"
        />

        <v-card-actions class="px-0 pt-0">
          <v-btn class="text-capitalize bg-indigo" block
            >View Result</v-btn
          >
        </v-card-actions>
        <v-card-actions class="px-0 pt-0">
          <v-btn class="text-capitalize bg-indigo" block
            >View Annual Result</v-btn
          >
        </v-card-actions>
      </v-card-text>
      <v-card-text class="text-caption pt-0 pb-3">
        Or
        <router-link
          to="/studentLogin"
          class="text-decoration-none text-indigo font-weight-medium"
          >Click here</router-link
        >
        to login
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