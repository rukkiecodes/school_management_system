<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn
        flat
        class="px-5"
        variant="tonal"
        @click="$router.go(-1)"
        color="indigo text-capitalize "
        ><v-icon class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn
      >
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card class="mt-10" width="400" max-width="100%">
        <v-card-title>Add Role</v-card-title>
        <v-card-subtitle class="text-grey-darken-4 text-body-2"
          >Add the user role for the academic and non-academic staff of the
          school</v-card-subtitle
        >
        <v-divider class="my-5" />
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-text-field
                placeholder="Role Name"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12" class="py-0">
              <v-switch placeholder="Is Teaching?"></v-switch>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-switch placeholder="Is an officer?"></v-switch>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-switch placeholder="Is Account officer?"></v-switch>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-switch placeholder="Is a super Admin?"></v-switch>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-switch placeholder="Can Edit Results?"></v-switch>
            </v-col>
          </v-row>
          <v-card-actions class="px-0 mt-3">
            <v-spacer />
            <v-btn
              elevation="3"
              class="text-capitalize bg-indigo px-5 "
              >Create</v-btn
            >
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
