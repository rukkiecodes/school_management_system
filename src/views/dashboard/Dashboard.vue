<template>
  <AppBar />
  <Drawer />

  <router-view />
</template>

<script>
import AppBar from "./layout/AppBar.vue";
import Drawer from "./layout/Drawer.vue";
export default {
  components: {
    AppBar,
    Drawer,
  },
};
</script>
