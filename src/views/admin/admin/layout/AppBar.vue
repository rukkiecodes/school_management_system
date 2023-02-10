<template>
  <v-app-bar :elevation="0" density="compact" order="1" class="appBar">
    <v-app-bar-nav-icon
      class="d-lg-none"
      @click="dashboard.drawer = !dashboard.drawer"
    >
      <v-icon>mdi-menu</v-icon>
    </v-app-bar-nav-icon>
    <v-app-bar-title>MULTITENANT</v-app-bar-title>
    <v-spacer />
    <Notification />
    <DetailsControle />
  </v-app-bar>
</template>

<script>
import Notification from "./components/Notification.vue";
import DetailsControle from "./components/DetailsControle.vue";
import { mapState } from "vuex";
export default {
  components: { Notification, DetailsControle },
  computed: {
    ...mapState(["dashboard"]),
  },
};
</script>

<style scoped>
.appBar {
  background: rgba(255, 255, 255, 0.25) !important;
  backdrop-filter: blur(20px);
}
</style>