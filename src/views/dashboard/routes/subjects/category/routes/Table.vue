<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn elevation="3" class="" to="/dashboard/subjects/create">
        <span class="text-capitalize">Create New Subject</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card elevation="3" class="">
        <v-card-title> Subject Categories List </v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Code</th>
              <th class="text-left">Parent Subject</th>
              <th class="text-left">Subject category</th>
              <th class="text-left">show in subject</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="subject in allSubjectCategoryArray" :key="subject.id">
              <td>{{ subject.name }}</td>
              <td>{{ subject.code }}</td>
              <td>{{ subject.parentsubject }}</td>
              <td>{{ subject.subjectcategory }}</td>
              <td>{{ subject.showinsubject }}</td>
              <td>
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item style="cursor: pointer" @click="fillSubjectCategoryForm(subject)">
                        <v-list-item-title class="text-body-2">Edit</v-list-item-title>

                        <v-dialog width="400" persistent v-model="updateSubjectCategory.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Edit {{ subject?.name }}

                              <v-btn icon flat size="small" @click="updateSubjectCategory.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field v-model="updateSubjectCategory.name" placeholder="Subject Category Name"
                                density="compact" variant="outlined" />

                              <v-text-field v-model="updateSubjectCategory.code" placeholder="Subject Code"
                                density="compact" variant="outlined" />

                              <v-text-field v-model="updateSubjectCategory.parentsubject" placeholder="Parent Subject"
                                density="compact" variant="outlined" />

                              <v-text-field v-model="updateSubjectCategory.subjectcategory"
                                placeholder="Subject category" density="compact" variant="outlined" />

                              <v-text-field v-model="updateSubjectCategory.class" placeholder="Class" density="compact"
                                variant="outlined" />

                              <v-select v-model="updateSubjectCategory.showinsubject" placeholder="Show in Subject"
                                :items="['Yes', 'No']" density="compact" variant="outlined" />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn block @click="updateSubjectCategoryItem(subject)"
                                :loading="updateSubjectCategory.loading"
                                class="bg-indigo text-capitalize">Update</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item>

                      <v-list-item style="cursor: pointer" :to="`/dashboard/subjects/category/${subject?.id}`">
                        <v-list-item-title class="text-body-2">View Subject Category</v-list-item-title>
                      </v-list-item>

                      <v-list-item style="cursor: pointer">
                        <v-list-item-title class="text-body-2 text-red">Delete</v-list-item-title>

                        <v-dialog width="400" persistent activator="parent" v-model="deleteSubjectsCategory.dialog">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Delete {{ subject?.name }}

                              <v-btn icon flat size="small" @click="deleteSubjectsCategory.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn block class="bg-red text-capitalize" @click="deleteSubjectCategory(subject?.id)"
                                :loading="deleteSubjectsCategory.loading">Delete</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
  methods: {
    ...mapMutations(["fillSubjectCategoryForm"]),
    ...mapActions(["updateSubjectCategoryItem", 'deleteSubjectCategory'])
  },

  computed: {
    ...mapGetters(['allSubjectCategoryArray']),
    ...mapState(["updateSubjectCategory", 'deleteSubjectsCategory'])
  }
};
</script>
