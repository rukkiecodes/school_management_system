<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        color="indigo"
        class="text-body-1"
        v-bind="props"
        prepend-icon="mdi-account"
      >
        Hello admin!
      </v-btn>
    </template>
    <v-list density="compact" class="py-0">
      <v-list-item to="/dashboard/profile">
        <template v-slot:prepend>
          <v-icon size="20" class="mr-4" icon="mdi-account"></v-icon>
        </template>

        <v-list-item-title class="text-body-2">My Profile</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <template v-slot:prepend>
          <v-icon size="20" class="mr-4" icon="mdi-power"></v-icon>
        </template>
        <v-list-item-title class="text-body-2">Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
