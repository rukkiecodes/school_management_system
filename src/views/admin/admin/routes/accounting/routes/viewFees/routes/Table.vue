<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="mb-4 bg-indigo-accent-4" to="/admin/accounting/addFee">
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card elevation="0">
        <v-card-title>Staff List</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Description</th>
              <th class="text-left">First Term</th>
              <th class="text-left">Second Term</th>
              <th class="text-left">Third Term</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fee, i) in allFees" :key="i">
              <td>{{ fee?.name }}</td>
              <td>{{ fee?.description }}</td>
              <td>{{ fee?.firsttermamount }}</td>
              <td>{{ fee?.secondtermamount }}</td>
              <td>{{ fee?.thirdtermamount }}</td>
              <td>
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item
                        style="cursor: pointer"
                        @click="fillForm(fee)"
                      >
                        <v-list-item-title class="text-body-2"
                          >Edit</v-list-item-title
                        >

                        <v-dialog
                          width="400"
                          persistent
                          v-model="updateFee.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Edit {{ fee?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="updateFee.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field
                                placeholder="Name"
                                density="compact"
                                variant="outlined"
                                v-model="updateFee.name"
                              />
                              <v-text-field
                                density="compact"
                                variant="outlined"
                                placeholder="Description"
                                v-model="updateFee.description"
                              />
                              <v-text-field
                                type="number"
                                density="compact"
                                variant="outlined"
                                placeholder="First Term Amout"
                                v-model="updateFee.firstTerm"
                              />
                              <v-text-field
                                type="number"
                                density="compact"
                                variant="outlined"
                                placeholder="Second Term Amout"
                                v-model="updateFee.secondTerm"
                              />
                              <v-text-field
                                type="number"
                                density="compact"
                                variant="outlined"
                                placeholder="Third Term Amout"
                                v-model="updateFee.thirdTerm"
                              />
                              <v-text-field
                                density="compact"
                                variant="outlined"
                                placeholder="Class"
                                v-model="updateFee.class"
                              />
                              <v-text-field
                                density="compact"
                                variant="outlined"
                                placeholder="Session"
                                v-model="updateFee.session"
                              />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="updateFeeItem(fee)"
                                :loading="updateFee.loading"
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
                          v-model="deleteFees.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Edit {{ fee?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="deleteFees.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="deleteFee(fee)"
                                :loading="deleteFees.loading"
                                class="bg-red text-capitalize"
                                >Delete {{ fee?.name }}</v-btn
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
    ...mapActions(["updateFeeItem", "deleteFee"]),

    ...mapMutations(["fillForm"]),
  },

  computed: {
    ...mapGetters(["allFees"]),
    ...mapState(["updateFee", "deleteFees"]),
  },
};
</script>
  