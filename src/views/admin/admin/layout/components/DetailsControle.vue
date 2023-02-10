<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        color="indigo-accent-4"
        class="text-body-1"
        v-bind="props"
        prepend-icon="mdi-account"
      >
        <span class="d-none d-sm-flex">Hello admin!</span>
      </v-btn>
    </template>
    <v-list density="compact" class="py-0">
      <v-list-item to="/admin/profile">
        <template v-slot:prepend>
          <v-icon size="20" class="mr-4" icon="mdi-account"></v-icon>
        </template>

        <v-list-item-title class="text-body-2">My Profile</v-list-item-title>
      </v-list-item>

      <v-list-item @click="logout">
        <template v-slot:prepend>
          <v-icon size="20" class="mr-4" icon="mdi-power"></v-icon>
        </template>
        <v-list-item-title class="text-body-2">Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>