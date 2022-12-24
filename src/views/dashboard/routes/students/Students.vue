<template>
  <v-container>
    <BarVue />

    <!-- <transition name="fade" mode="out-in"> -->
      <router-view />
    <!-- </transition> -->
  </v-container>
</template>

<script>
import BarVue from "../components/Bar.vue";
export default {
  components: { BarVue },
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