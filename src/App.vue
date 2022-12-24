<template>
  <v-app>
    <v-main>
      <!-- <transition name="fade" mode="out-in"> -->
        <router-view />
      <!-- </transition> -->
    </v-main>
  </v-app>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
} */
</style>