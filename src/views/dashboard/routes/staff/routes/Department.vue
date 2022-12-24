<template>
  <v-card class="mt-10">
    <v-card-title>Add Staff</v-card-title>
    <v-divider class="my-5" />
    <v-card-text>
      <v-row justify="space-between">
        <v-col cols="12">
          <v-text-field
            label="Department Name"
            density="comfortable"
            variant="outlined"
            hide-details
          />
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