<template>
  <v-container>
    <BarVue />

    <router-view />
  </v-container>
</template>

<script>
import BarVue from "../components/Bar.vue";
export default {
  components: { BarVue },
};
</script>
