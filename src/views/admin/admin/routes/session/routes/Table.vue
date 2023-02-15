<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="mb-4 bg-indigo-accent-4" :to="`${$route.path}/create`">
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card flat>
        <v-card-title>Session List</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left text-capitalize">Session name</th>
              <th class="text-left text-capitalize">Start Date</th>
              <th class="text-left text-capitalize">End Date</th>
              <th class="text-left text-capitalize"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="session in allSessionArray" :key="session.id">
              <td>{{ session.sessionname }}</td>
              <td class="text-left">
                {{ session.startdate }}
              </td>
              <td class="text-left">
                {{ session.enddate }}
              </td>
              <td class="text-right">
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item
                        style="cursor: pointer"
                        @click="fillSessionForm(session)"
                      >
                        <v-list-item-title class="text-body-2"
                          >Edit</v-list-item-title
                        >

                        <v-dialog
                          width="400"
                          persistent
                          v-model="updateSession.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Edit

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="updateSession.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field
                                placeholder="Session Name"
                                density="compact"
                                variant="outlined"
                                v-model="updateSession.sessionname"
                              />
                              <v-text-field
                                placeholder="Start Date"
                                density="compact"
                                variant="outlined"
                                v-model="updateSession.startdate"
                              />
                              <v-text-field
                                placeholder="End Date"
                                density="compact"
                                variant="outlined"
                                v-model="updateSession.enddate"
                              />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="updateSessionItem(session)"
                                :loading="updateSession.loading"
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
                          v-model="deleteSession.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Delete {{ session?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="deleteSession.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="deleteThisSession(session)"
                                :loading="deleteSession.loading"
                                class="bg-red text-capitalize"
                                >Delete {{ session?.name }}</v-btn
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
    ...mapMutations(["fillSessionForm"]),
    ...mapActions(["updateSessionItem", "deleteThisSession"]),
  },

  computed: {
    ...mapGetters(["allSessionArray"]),
    ...mapState(["updateSession", "deleteSession"]),
  },
};
</script>
