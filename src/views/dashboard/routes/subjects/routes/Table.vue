<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn elevation="3" class="" to="/dashboard/subjects/create">
        <v-icon class="mr-2">mdi-home</v-icon>
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card elevation="3" class="">
        <v-card-title> Subject List </v-card-title>

        <v-card-actions>
          <v-text-field label="Filter" density="compact" variant="underlined" prepend-inner-icon="mdi-magnify" />
        </v-card-actions>
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

                  <!-- <v-menu activator="parent">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item style="cursor: pointer" @click="fillFundForm(fund)">
                        <v-list-item-title class="text-body-2">Edit</v-list-item-title>

                        <v-dialog width="400" persistent v-model="updateFund.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Edit {{ fund?.session }}

                              <v-btn icon flat size="small" @click="updateFund.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field label="Session" density="compact" variant="outlined"
                                v-model="updateFund.session" />
                              <v-text-field label="Term" density="compact" variant="outlined"
                                v-model="updateFund.term" />
                              <v-text-field type="number" label="Amount" density="compact" variant="outlined"
                                v-model="updateFund.amount" />
                              <v-text-field density="compact" variant="outlined" label="Reason"
                                v-model="updateFund.reason" />
                              <v-text-field density="compact" variant="outlined" label="Transaction type"
                                v-model="updateFund.transactiontype" />
                              <v-text-field density="compact" variant="outlined" label="Accounting Item"
                                v-model="updateFund.accountingitem" />
                              <v-text-field density="compact" label="Initiator" variant="outlined"
                                v-model="updateFund.initiator" />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn block @click="updateFundItem(fund)" :loading="updateFund.loading"
                                class="bg-indigo text-capitalize">Update</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item>

                      <v-list-item style="cursor: pointer" :to="`/dashboard/funds/viewFunds/${fund?.id}`">
                        <v-list-item-title class="text-body-2">View Fund</v-list-item-title>
                      </v-list-item>

                      <v-list-item style="cursor: pointer">
                        <v-list-item-title class="text-body-2 text-red">Delete</v-list-item-title>

                        <v-dialog width="400" persistent activator="parent" v-model="deleteSingleFund.dialog">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Delete {{ fund?.session }}

                              <v-btn icon flat size="small" @click="deleteSingleFund.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn block class="bg-red text-capitalize" @click="removeSingleFund(fund?.id)"
                                :loading="deleteSingleFund.loading">Delete</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item>
                    </v-list>
                  </v-menu> -->
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
    ...mapGetters(['allSubjectArray'])
  }
};
</script>
