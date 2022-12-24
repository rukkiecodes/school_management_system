<template>
  <v-app-bar :elevation="3" density="compact" class="appBar">
    <v-app-bar-nav-icon class="d-lg-none" @click="toggleAppDrawer">
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
import { mapMutations } from "vuex";
export default {
  components: { Notification, DetailsControle },
  methods: {
    ...mapMutations(["toggleAppDrawer"]),
  },
};
</script>

<style scoped>
.appBar {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
}
</style>