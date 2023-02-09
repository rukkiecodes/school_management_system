<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="mb-4" to="/admin/students/create">
        <v-icon class="mr-2">mdi-account-plus</v-icon>
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card class="">
        <v-card-title>Student List</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">First name</th>
              <th class="text-left">Last name</th>
              <th class="text-left">Other name</th>
              <th class="text-left">Phone</th>
              <th class="text-left">Email</th>
              <th class="text-left">Next Of Kin</th>
              <th class="text-left">Address</th>
              <th class="text-left">Classroom</th>
              <th class="text-left">Amount due</th>
              <th class="text-left">Assigned fee</th>
              <th class="text-left">Login code</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in allStudentArray" :key="student.id">
              <td>{{ student.firstname }}</td>
              <td>{{ student.lastname }}</td>
              <td>{{ student.othername }}</td>
              <td>{{ student.phone }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.nextofkin }}</td>
              <td>{{ student.address }}</td>
              <td>{{ student.classroom }}</td>
              <td>{{ student.amountdue }}</td>
              <td>{{ student.assignedfee }}</td>
              <td>{{ student.logincode }}</td>
              <td>
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item style="cursor: pointer" @click="fillStudentForm(student)">
                        <v-list-item-title class="text-body-2">Edit</v-list-item-title>

                        <v-dialog width="400" persistent v-model="updateStudent.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Edit {{ student?.firstname }} {{ student.lastname }}

                              <v-btn icon flat size="small" @click="updateStudent.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field v-model="updateStudent.firstname" placeholder="First Name" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStudent.lastname" placeholder="Last name" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStudent.othername" placeholder="Other name" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStudent.phone" placeholder="Phone" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStudent.email" placeholder="Email" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStudent.nextofkin" placeholder="Next Of Kin"
                                density="compact" variant="outlined" />
                              <v-text-field v-model="updateStudent.address" placeholder="Address" density="compact"
                                variant="outlined" />
                              <v-select v-model="updateStudent.gender" :items="['male', 'Female']"
                                placeholder="department" density="compact" variant="outlined" />
                              <v-text-field v-model="updateStudent.classroom" placeholder="Classroom" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStudent.assignedfee" placeholder="Assigned Fee"
                                density="compact" variant="outlined" />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn block @click="updateStudentItem(student)" :loading="updateStudent.loading"
                                class="bg-indigo text-capitalize">Update</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item>

                      <v-list-item style="cursor: pointer" :to="`/admin/students/${student?.id}`">
                        <v-list-item-title class="text-body-2">View Student</v-list-item-title>
                      </v-list-item>

                      <v-list-item style="cursor: pointer">
                        <v-list-item-title class="text-body-2 text-red">Delete</v-list-item-title>

                        <v-dialog width="400" persistent v-model="deleteStudents.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Delete {{ student?.firstname }} {{ student?.lastname }}

                              <v-btn icon flat size="small" @click="deleteStudents.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn block @click="deleteStudent(student)" :loading="deleteStudents.loading"
                                class="bg-red text-capitalize">Delete {{ student?.name }}</v-btn>
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
    ...mapMutations(["fillStudentForm"]),
    ...mapActions(["updateStudentItem", "deleteStudent"]),
  },

  computed: {
    ...mapGetters(["allStudentArray"]),
    ...mapState(["updateStudent", "deleteStudents"])
  },
};
</script>
