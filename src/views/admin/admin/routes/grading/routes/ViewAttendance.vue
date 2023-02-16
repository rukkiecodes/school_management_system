<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="mb-4 bg-indigo-accent-4" to="/admin/grading/createAttendance">
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card flat>
        <v-card-title>Attendance List</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left text-capitalize">student id</th>
              <th class="text-left text-capitalize">student name</th>
              <th class="text-left text-capitalize">class room</th>
              <th class="text-left text-capitalize">class level</th>
              <th class="text-left text-capitalize">attendance score</th>
              <th class="text-left text-capitalize">session</th>
              <th class="text-left text-capitalize">term</th>
              <th class="text-left text-capitalize"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="attendance in allAttendanceArray" :key="attendance.id">
              <td>{{ attendance.studentid }}</td>
              <td>{{ attendance.studentname }}</td>
              <td>{{ attendance.classroom }}</td>
              <td>{{ attendance.classlevel }}</td>
              <td>{{ attendance.attendancescore }}</td>
              <td>{{ attendance.session }}</td>
              <td>{{ attendance.term }}</td>
              <td>
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item
                        style="cursor: pointer"
                        @click="filluUdateAttendanceForm(attendance)"
                      >
                        <v-list-item-title class="text-body-2"
                          >Edit</v-list-item-title
                        >

                        <v-dialog
                          width="400"
                          persistent
                          v-model="updateAttendance.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Edit {{ attendance.studentname }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="updateAttendance.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field
                                v-model="updateAttendance.studentname"
                                placeholder="Student Name"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateAttendance.studentid"
                                placeholder="Student id"
                                type="number"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateAttendance.classlevel"
                                placeholder="Class Level"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateAttendance.classroom"
                                placeholder="Class Room"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateAttendance.attendancescore"
                                placeholder="Attendance score"
                                type="number"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateAttendance.session"
                                placeholder="Session"
                                density="compact"
                                variant="outlined"
                              />
                              <v-text-field
                                v-model="updateAttendance.term"
                                placeholder="Term"
                                density="compact"
                                variant="outlined"
                              />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="updateAttendanceItem(attendance)"
                                :loading="updateAttendance.loading"
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
                          v-model="deleteAttendance.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Delete {{ attendance.studentname }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="deleteAttendance.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="deleteThisAttendance(attendance)"
                                :loading="deleteAttendance.loading"
                                class="bg-red text-capitalize"
                                >Delete {{ attendance.studentname }}</v-btn
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
    ...mapMutations(["filluUdateAttendanceForm"]),
    ...mapActions(["updateAttendanceItem", "deleteThisAttendance"]),
  },

  computed: {
    ...mapGetters(["allAttendanceArray"]),
    ...mapState(["updateAttendance", "deleteAttendance"]),
  },
};
</script>
  