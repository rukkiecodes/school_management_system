<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn flat class="px-5" variant="tonal" @click="$router.go(-1)" color="indigo text-capitalize rounded-lg"><v-icon
          class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card class="mt-10" width="400" max-width="100%">
        <v-card-title>Add Category</v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-text-field v-model="createCategoies.name" label="Category Name" density="compact" variant="outlined" hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="createCategoies.description" label="Description" density="compact" variant="outlined" hide-details />
            </v-col>
            <v-col cols="12">
              <v-select v-model="createCategoies.maincategory" label="Main Category" density="compact" variant="outlined" hide-details
                :items="['Asset', 'Liability', 'Capital', 'Income', 'Expense']" />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn block @click="createCategory" :loading="createCategoies.loading" class="text-capitalize bg-indigo">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions(["createCategory"])
  },

  computed: {
    ...mapState(["createCategoies"])
  }
}
</script>