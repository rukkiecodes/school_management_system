<template>
  <v-container>
    <v-row justify="space-between" class="my-10">
      <v-col cols="12">
        <v-btn class="mb-4">
          <span class="text-capitalize">Create New</span>

          <v-dialog v-model="eventDialoge" width="400" activator="parent">
            <v-card>
              <v-toolbar density="compact" color="transparent">
                <v-toolbar-title>Create new Event</v-toolbar-title>
                <v-spacer />
                <v-btn @click="eventDialoge = false" icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>

              <v-card-text>
                <v-text-field
                  v-model="addStudentEvent.name"
                  placeholder="name"
                  density="compact"
                  variant="outlined"
                />
                <v-text-field
                  v-model="addStudentEvent.start"
                  placeholder="Start data"
                  density="compact"
                  variant="outlined"
                />
                <v-text-field
                  v-model="addStudentEvent.end"
                  placeholder="End data"
                  density="compact"
                  variant="outlined"
                />
              </v-card-text>
              <v-card-actions>
                <v-btn
                  block
                  :loading="addStudentEvent.loading"
                  @click="addNewStudentEvent"
                  class="bg-indigo-accent-4"
                  >Create</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-card flat>
          <v-card-title>Event List</v-card-title>
          <v-table>
            <thead>
              <tr>
                <th class="text-left text-capitalize">Event name</th>
                <th class="text-left text-capitalize">Start Date</th>
                <th class="text-left text-capitalize">End Date</th>
                <th class="text-left text-capitalize"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event in allStudentEventsArray" :key="event.id">
                <td>{{ event.name }}</td>
                <td class="text-left">
                  {{ event.start }}
                </td>
                <td class="text-left">
                  {{ event.end }}
                </td>
                <td class="text-right">
                  <v-btn size="x-small" icon flat>
                    <v-icon>mdi-dots-vertical</v-icon>

                    <v-menu activator="parent" :close-on-content-click="false">
                      <v-list width="130" density="compact" class="pa-0 ma-0">
                        <v-list-item
                          style="cursor: pointer"
                          @click="fillStudentEventForm(event)"
                        >
                          <v-list-item-title class="text-body-2"
                            >Edit</v-list-item-title
                          >

                          <v-dialog
                            width="400"
                            persistent
                            v-model="updateStudentEvent.dialog"
                            activator="parent"
                          >
                            <v-card>
                              <v-card-title
                                class="
                                  d-flex
                                  justify-space-between
                                  align-center
                                "
                              >
                                Edit

                                <v-btn
                                  icon
                                  flat
                                  size="small"
                                  @click="updateStudentEvent.dialog = false"
                                >
                                  <v-icon>mdi-close</v-icon>
                                </v-btn>
                              </v-card-title>

                              <v-card-text>
                                <v-text-field
                                  placeholder="Name"
                                  density="compact"
                                  variant="outlined"
                                  v-model="updateStudentEvent.name"
                                />
                                <v-text-field
                                  placeholder="Start Date"
                                  density="compact"
                                  variant="outlined"
                                  v-model="updateStudentEvent.start"
                                />
                                <v-text-field
                                  placeholder="End Date"
                                  density="compact"
                                  variant="outlined"
                                  v-model="updateStudentEvent.end"
                                />
                              </v-card-text>

                              <v-card-actions>
                                <v-btn
                                  block
                                  @click="updateStudentEventItem(event)"
                                  :loading="updateStudentEvent.loading"
                                  class="bg-indigo-accent-4 text-capitalize"
                                  >Update</v-btn
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
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    eventDialoge: false,
  }),

  methods: {
    ...mapMutations(["fillStudentEventForm"]),
    ...mapActions(["updateStudentEventItem", "addNewStudentEvent"]),
  },

  computed: {
    ...mapGetters(["allStudentEventsArray"]),
    ...mapState(["addStudentEvent", "updateStudentEvent"]),
  },
};
</script>
