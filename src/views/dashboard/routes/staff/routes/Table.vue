<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="mb-4" to="/dashboard/staffs/create">
        <v-icon class="mr-2">mdi-account-plus</v-icon>
        <span class="text-capitalize">Create New</span>
      </v-btn>
      <v-btn class="ml-4 mb-4 bg-indigo" to="/dashboard/staffs/createStaffRole">
        <v-icon class="mr-2">mdi-account-lock</v-icon>
        <span class="text-capitalize">Create Staff Roll</span>
      </v-btn>
      <v-btn class="ml-4 mb-4 bg-indigo" to="/dashboard/staffs/createDepartment">
        <v-icon class="mr-2">mdi-office-building</v-icon>
        <span class="text-capitalize">Create Department</span>
      </v-btn>``
    </v-col>
    <v-col cols="12">
      <v-card class="">
        <v-card-title>Staff List</v-card-title>
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
              <th class="text-left">Department</th>
              <th class="text-left">Role</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="staff in allStaffArray" :key="staff.id">
              <td>{{ staff.firstname }}</td>
              <td>{{ staff.lastname }}</td>
              <td>{{ staff.othername }}</td>
              <td>{{ staff.phone }}</td>
              <td>{{ staff.email }}</td>
              <td>{{ staff.nextofkin }}</td>
              <td>{{ staff.address }}</td>
              <td>{{ staff.department }}</td>
              <td>{{ staff.role }}</td>
              <td>
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item style="cursor: pointer" @click="fillStaffUpdateForm(staff)">
                        <v-list-item-title class="text-body-2">Edit</v-list-item-title>

                        <v-dialog width="400" persistent v-model="updateStaff.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Edit {{ staff?.name }}

                              <v-btn icon flat size="small" @click="updateStaff.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field v-model="updateStaff.firstname" placeholder="First Name" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStaff.lastname" placeholder="Last name" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStaff.othername" placeholder="Other name" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStaff.phone" placeholder="Phone" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStaff.email" placeholder="Email" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStaff.nextofkin" placeholder="Next Of Kin" density="compact"
                                variant="outlined" />
                              <v-text-field v-model="updateStaff.address" placeholder="Address" density="compact"
                                variant="outlined" />
                              <v-select v-model="updateStaff.department"
                                :items="['ICT', 'Early year', 'Primary', 'Secondary']" placeholder="department"
                                density="compact" variant="outlined" />
                              <v-text-field v-model="updateStaff.role" placeholder="Role" density="compact"
                                variant="outlined" />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn block @click="updateStaffItem(staff)" :loading="updateStaff.loading"
                                class="bg-indigo text-capitalize">Update</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item>

                      <v-list-item style="cursor: pointer" :to="`/dashboard/staffs/${staff?.id}`">
                        <v-list-item-title class="text-body-2">View Staff</v-list-item-title>
                      </v-list-item>

                      <v-list-item style="cursor: pointer">
                        <v-list-item-title class="text-body-2 text-red">Delete</v-list-item-title>

                        <v-dialog width="400" persistent v-model="deleteStaffs.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Delete {{ staff?.firstname }} {{ staff?.lastname }}

                              <v-btn icon flat size="small" @click="deleteStaffs.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn block @click="deleteStaff(staff)" :loading="deleteStaffs.loading"
                                class="bg-red text-capitalize">Delete {{ staff?.name }}</v-btn>
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
    ...mapMutations(["fillStaffUpdateForm"]),
    ...mapActions(["updateStaffItem", "deleteStaff"]),
  },

  computed: {
    ...mapGetters(["allStaffArray"]),
    ...mapState(["updateStaff", "deleteStaffs"])
  },
};
</script>
