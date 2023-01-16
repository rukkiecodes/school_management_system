<template>
  <v-container>
    <BarView />
    <router-view />
  </v-container>
</template>

<script>
import BarView from "../components/Bar.vue";
export default {
  components: { BarView },
};
</script>

<style>
</style>