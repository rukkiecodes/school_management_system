<template>
  <v-card class="mt-10">
    <v-card-text>
      <v-row justify="space-between">
        <v-col cols="12" sm="6">
          <v-text-field
            label="Name"
            density="comfortable"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            label="Select class Type"
            density="comfortable"
            variant="outlined"
            hide-details
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            label="Select form teacher"
            density="comfortable"
            variant="outlined"
            hide-details
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            label="Select grade profile"
            density="comfortable"
            variant="outlined"
            hide-details
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            label="Select promotion classroom"
            density="comfortable"
            variant="outlined"
            hide-details
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            label="Assigned Fee"
            density="comfortable"
            variant="outlined"
            hide-details
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
          />
        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="$router.go(-1)" color="grey-darken-3 text-capitalize rounded-lg" class="px-5">Go Back</v-btn>
        <v-btn elevation="3" class="text-capitalize bg-indigo px-5 rounded-lg">Create</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>