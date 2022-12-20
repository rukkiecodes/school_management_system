<template>
  <v-app>
    <AppBar />
    <Drawer />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./layout/AppBar.vue";
import Drawer from "./layout/Drawer.vue";
export default {
  components: {
    AppBar,
    Drawer
  },
};
</script>
