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

        <v-card-actions>
          <v-text-field label="Filter" density="compact" variant="underlined" prepend-inner-icon="mdi-magnify" />
        </v-card-actions>
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
                      <!-- <v-list-item style="cursor: pointer" @click="fillForm(fee)">
                        <v-list-item-title class="text-body-2">Edit</v-list-item-title>

                        <v-dialog width="400" persistent v-model="updateFee.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Edit {{ fee?.name }}

                              <v-btn icon flat size="small" @click="updateFee.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field label="Name" density="compact" variant="outlined"
                                v-model="updateFee.name" />
                              <v-text-field density="compact" variant="outlined" label="Description"
                                v-model="updateFee.description" />
                              <v-text-field type="number" density="compact" variant="outlined" label="First Term Amout"
                                v-model="updateFee.firstTerm" />
                              <v-text-field type="number" density="compact" variant="outlined" label="Second Term Amout"
                                v-model="updateFee.secondTerm" />
                              <v-text-field type="number" density="compact" variant="outlined" label="Third Term Amout"
                                v-model="updateFee.thirdTerm" />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn block @click="updateFeeItem(fee)" :loading="updateFee.loading"
                                class="bg-indigo text-capitalize">Update</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item> -->

                      <!-- <v-list-item style="cursor: pointer">
                        <v-list-item-title class="text-body-2 text-red">Delete</v-list-item-title>

                        <v-dialog width="400" persistent v-model="deleteFees.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Edit {{ fee?.name }}

                              <v-btn icon flat size="small" @click="deleteFees.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn block @click="deleteFee(fee)" :loading="deleteFees.loading"
                                class="bg-red text-capitalize">Delete {{ fee?.name }}</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item> -->
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
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(["allStaffArray"]),
  },
};
</script>
