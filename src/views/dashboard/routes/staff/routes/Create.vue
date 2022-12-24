<template>
  <v-card class="mt-10">
    <v-card-title>Add Staff</v-card-title>
    <v-divider class="my-5" />
    <v-card-text>
      <v-row justify="space-between">
        <v-col cols="12" sm="6">
          <v-text-field
            label="User Name"
            density="comfortable"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Password"
            type="password"
            density="comfortable"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Phone Number"
            density="comfortable"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Email"
            density="comfortable"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="First Name"
            density="comfortable"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Surname"
            density="comfortable"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Middle Name"
            density="comfortable"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Next Of Kin"
            density="comfortable"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Contact Address"
            density="comfortable"
            variant="outlined"
            hide-details
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            label="Select Department"
            density="comfortable"
            variant="outlined"
            hide-details
            :items="['Male', 'Female']"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            label="Select Role"
            density="comfortable"
            variant="outlined"
            hide-details
            :items="['Male', 'Female']"
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