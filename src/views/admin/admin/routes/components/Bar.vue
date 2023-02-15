<template>
  <v-toolbar density="compact" class="mt-9" color="transparent">
    <v-toolbar-title class="text-body-1">
      <v-breadcrumbs
        density="compact"
        color="grey-darken-3"
        class="pa-0"
        :items="$route.path.match(/\w+/g)"
      ></v-breadcrumbs>
    </v-toolbar-title>
    <v-spacer />
    <v-chip
      prepend-icon="mdi-alarm"
      class="text-capitalize font-weight-normal bg-indigo-lighten-6"
      >{{ new Date(allSessionArray[0]?.startdate).getFullYear() || '2020' }} -
      {{ allSessionArray[0]?.sessionname || 'First Term' }}</v-chip
    >
  </v-toolbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allSessionArray"]),
  },
};
</script>