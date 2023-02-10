<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="mb-4" to="/admin/grading/createGrade">
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card class="">
        <v-card-title>Grades List</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left text-capitalize">student id</th>
              <th class="text-left text-capitalize">student name</th>
              <th class="text-left text-capitalize">class</th>
              <th class="text-left text-capitalize">subject</th>
              <th class="text-left text-capitalize">first ca</th>
              <th class="text-left text-capitalize">second ca</th>
              <th class="text-left text-capitalize">exam</th>
              <th class="text-left text-capitalize">session</th>
              <th class="text-left text-capitalize">term</th>
              <th class="text-left text-capitalize"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="grade in allGradeArray" :key="grade.id">
              <td>{{ grade.studentid }}</td>
              <td>{{ grade.studentname }}</td>
              <td>{{ grade.class }}</td>
              <td>{{ grade.subject }}</td>
              <td>{{ grade.firstca }}</td>
              <td>{{ grade.secondca }}</td>
              <td>{{ grade.exam }}</td>
              <td>{{ grade.session }}</td>
              <td>{{ grade.term }}</td>
              <td>
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item
                        style="cursor: pointer"
                        @click="filluUdateGradeForm(grade)"
                      >
                        <v-list-item-title class="text-body-2"
                          >Edit</v-list-item-title
                        >

                        <v-dialog
                          width="400"
                          persistent
                          v-model="updateGrade.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Edit {{ grade.studentname }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="updateGrade.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field
                                v-model="updateGrade.studentname"
                                placeholder="Student Name"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateGrade.studentid"
                                placeholder="Student id"
                                type="number"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateGrade.class"
                                placeholder="Class"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateGrade.subject"
                                placeholder="Subject"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateGrade.firstca"
                                placeholder="Tirst CA"
                                type="number"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateGrade.secondca"
                                type="number"
                                placeholder="Second CA"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateGrade.exam"
                                type="number"
                                placeholder="Exam"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateGrade.term"
                                placeholder="Term"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateGrade.session"
                                placeholder="Session"
                                density="compact"
                                variant="outlined"
                              />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="updateGradeItem(grade)"
                                :loading="updateGrade.loading"
                                class="bg-indigo-accent-4 text-capitalize"
                                >Update</v-btn
                              >
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item>

                      <v-list-item style="cursor: pointer">
                        <v-list-item-title class="text-body-2 text-red"
                          >Delete</v-list-item-title
                        >

                        <v-dialog
                          width="400"
                          persistent
                          v-model="deleteGrade.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Delete {{ grade.studentname }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="deleteGrade.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="deleteThisGrade(grade)"
                                :loading="deleteGrade.loading"
                                class="bg-red text-capitalize"
                                >Delete {{ grade.studentname }}</v-btn
                              >
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
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  methods: {
    ...mapMutations(["filluUdateGradeForm"]),
    ...mapActions(["updateGradeItem", "deleteThisGrade"]),
  },

  computed: {
    ...mapGetters(["allGradeArray"]),
    ...mapState(["updateGrade", "deleteGrade"]),
  },
};
</script>
  