<template>
  <v-card class="mt-10">
    <v-card-title>Add Role</v-card-title>
    <v-card-subtitle class="text-grey-darken-4 text-body-2"
      >Add the user role for the academic and non-academic staff of the
      school</v-card-subtitle
    >
    <v-divider class="my-5" />
    <v-card-text>
      <v-row justify="space-between" align="start">
        <v-col cols="12">
          <v-text-field
            label="Role Name"
            density="comfortable"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-switch label="Is Teaching?"></v-switch>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-switch label="Is an officer?"></v-switch>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-switch label="Is Account officer?"></v-switch>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-switch label="Is a super Admin?"></v-switch>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-switch label="Can Edit Results?"></v-switch>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer />
        <v-btn
          @click="$router.go(-1)"
          color="grey-darken-3 text-capitalize rounded-lg"
          class="px-5"
          >Go Back</v-btn
        >
        <v-btn elevation="3" class="text-capitalize bg-indigo px-5 rounded-lg"
          >Create</v-btn
        >
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>