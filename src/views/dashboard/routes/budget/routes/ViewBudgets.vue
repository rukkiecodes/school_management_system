<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn elevation="3" class="mb-4" to="/dashboard/accounting/budget/addBudget">
        <v-icon class="mr-2">mdi-account-plus</v-icon>
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card elevation="3" class="">
        <v-card-title>Staff List</v-card-title>

        <v-card-actions>
          <v-text-field label="Filter" density="compact" variant="underlined" prepend-inner-icon="mdi-magnify" />
        </v-card-actions>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">First Term</th>
              <th class="text-left">Second Term</th>
              <th class="text-left">Third Term</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(budget, i) in allFees" :key="i">
              <td>{{ budget?.name }}</td>
              <td>{{ budget?.firsttermamount }}</td>
              <td>{{ budget?.secondtermamount }}</td>
              <td>{{ budget?.thirdtermamount }}</td>
              <td>
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item style="cursor: pointer" @click="fillUpdateBudgetForm(budget)">
                        <v-list-item-title class="text-body-2">Edit</v-list-item-title>

                        <v-dialog width="400" persistent v-model="updateBudget.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Edit {{ budget?.name }}

                              <v-btn icon flat size="small" @click="updateBudget.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              {{ updateBudget.session }}
                              <v-text-field label="Session" density="compact" variant="outlined"
                                v-model="updateBudget.session" />
                              <v-text-field density="compact" variant="outlined" label="First Term"
                                v-model="updateBudget.firstterm" />
                              <v-text-field density="compact" variant="outlined" label="Second Term"
                                v-model="updateBudget.secondterm" />
                              <v-text-field density="compact" variant="outlined" label="Third Term"
                                v-model="updateBudget.thirdterm" />
                              <v-text-field density="compact" variant="outlined" label="Accounting Item"
                                v-model="updateBudget.accountingitem" />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn block @click="updateBudgetItem(budget)" :loading="updateBudget.loading"
                                class="bg-indigo text-capitalize">Update</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item>

                      <!-- <v-list-item style="cursor: pointer">
                        <v-list-item-title class="text-body-2 text-red">Delete</v-list-item-title>

                        <v-dialog width="400" persistent v-model="deleteFees.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Edit {{ budget?.name }}

                              <v-btn icon flat size="small" @click="deleteFees.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn block @click="deleteFee(budget)" :loading="deleteFees.loading"
                                class="bg-red text-capitalize">Delete {{ budget?.name }}</v-btn>
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
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["updateBudgetItem", "deleteFee"]),

    ...mapMutations(["fillUpdateBudgetForm"]),
  },

  computed: {
    ...mapGetters(["allFees"]),
    ...mapState(["updateBudget", "deleteFees"]),
  },
};
</script>
