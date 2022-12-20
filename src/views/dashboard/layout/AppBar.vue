<template>
  <v-app-bar :elevation="3" title="School System" density="compact">
    <v-spacer />
    <Notification />
    <DetailsControle />
  </v-app-bar>
</template>

<script>
import Notification from "./components/Notification.vue";
import DetailsControle from "./components/DetailsControle.vue";
export default {
  components: { Notification, DetailsControle },
};
</script>