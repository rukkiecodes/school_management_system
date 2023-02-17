<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
  <v-snackbar
    v-model="snackbar.active"
    :color="snackbar.color"
    close-on-back
    location="top right"
    absolute
    timeout="3000"
  >
    {{ snackbar.text }}
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["snackbar"]),
  },
};
</script>