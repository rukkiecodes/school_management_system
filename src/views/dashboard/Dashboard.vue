<template>
  <AppBar />
  <Drawer />

  <!-- <transition name="fade" mode="out-in"> -->
    <router-view />
  <!-- </transition> -->
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


<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>