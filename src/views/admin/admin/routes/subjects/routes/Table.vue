<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="bg-indigo-accent-4" :to="`${$route.path}/create`">
        <span class="text-capitalize">Create New Subject</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card flat>
        <v-card-title> Subject List </v-card-title>
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
            <tr v-for="subject in allSubjectArray" :key="subject.id">
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
                      <v-list-item style="cursor: pointer" @click="fillSubjectForm(subject)">
                        <v-list-item-title class="text-body-2">Edit</v-list-item-title>

                        <v-dialog width="400" persistent v-model="updateSubject.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Edit {{ subject?.name }}

                              <v-btn icon flat size="small" @click="updateSubject.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field v-model="updateSubject.name" placeholder="First Name" density="compact"
                                variant="outlined" />

                              <v-text-field v-model="updateSubject.code" placeholder="Subject Code" density="compact"
                                variant="outlined" />

                              <v-select v-model="updateSubject.parentsubject" :items="['Yes', 'No']"
                                placeholder="Parent Subject" density="compact" variant="outlined" />

                              <v-text-field v-model="updateSubject.subjectcategory" placeholder="Subject category"
                                density="compact" variant="outlined" />

                              <v-text-field v-model="updateSubject.class" placeholder="Class" density="compact"
                                variant="outlined" />

                              <v-select v-model="updateSubject.showinsubject" :items="['Yes', 'No']"
                                placeholder="Show In Subject" density="compact" variant="outlined" />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn block @click="updateSubjectItem(subject)" :loading="updateSubject.loading"
                                class="bg-indigo-accent-4 text-capitalize">Update</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item>

                      <v-list-item style="cursor: pointer" :to="`/admin/subjects/${subject?.id}`">
                        <v-list-item-title class="text-body-2">View Subject</v-list-item-title>
                      </v-list-item>

                      <v-list-item style="cursor: pointer">
                        <v-list-item-title class="text-body-2 text-red">Delete</v-list-item-title>

                        <v-dialog width="400" persistent activator="parent" v-model="deleteSubjects.dialog">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Delete {{ subject?.name }}

                              <v-btn icon flat size="small" @click="deleteSubjects.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn block class="bg-red text-capitalize" @click="deleteSubject(subject?.id)"
                                :loading="deleteSubjects.loading">Delete</v-btn>
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
    ...mapMutations(["fillSubjectForm"]),
    ...mapActions(["updateSubjectItem", 'deleteSubject'])
  },

  computed: {
    ...mapGetters(['allSubjectArray']),
    ...mapState(["updateSubject", 'deleteSubjects'])
  }
};
</script>
