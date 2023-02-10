<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn flat class="px-5" variant="tonal" @click="$router.go(-1)" color="indigo-accent-4 text-capitalize "><v-icon
          class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card class="mt-10" width="400" max-width="100%">
        <v-card-title>Add Subject Category</v-card-title>
        <v-card-text>
          <v-text-field v-model="addSubjectCategory.name" placeholder="Subject Category Name" density="compact"
            variant="outlined" />
          <v-text-field v-model="addSubjectCategory.code" placeholder="Subject Code" density="compact"
            variant="outlined" />
          <v-text-field v-model="addSubjectCategory.parentsubject" placeholder="Parent Subject" density="compact"
            variant="outlined" />
          <v-text-field v-model="addSubjectCategory.subjectcategory" placeholder="Subject category" density="compact"
            variant="outlined" />
          <v-text-field v-model="addSubjectCategory.showinsubject" placeholder="Show In Subject" density="compact"
            variant="outlined" />
          <v-text-field v-model="addSubjectCategory.class" placeholder="Class" density="compact" variant="outlined" />
          <v-select v-model="addSubjectCategory.showinresult" placeholder="Show in result" :items="['Yes', 'No']"
            density="compact" variant="outlined" />
          <v-select v-model="addSubjectCategory.showscores" placeholder="Show Scores" :items="['Yes', 'No']"
            density="compact" variant="outlined" />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addNewSubjectCategory" :loading="addSubjectCategory.loading" block
            class="text-capitalize bg-indigo-accent-4 px-5 ">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
  
<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions(["addNewSubjectCategory"])
  },

  computed: {
    ...mapState(["addSubjectCategory"])
  }
}
</script>