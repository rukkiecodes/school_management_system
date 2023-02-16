<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="mb-4 bg-indigo-accent-4" :to="`${$route.path}/create`">
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card flat>
        <v-card-title>Announcement List</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left text-capitalize">name</th>
              <th class="text-left text-capitalize">Start Date</th>
              <th class="text-left text-capitalize">End Date</th>
              <th class="text-left text-capitalize"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="announcement in allAnnouncementArray"
              :key="announcement.id"
            >
              <td>{{ announcement.name }}</td>
              <td class="text-left">
                {{ new Date(announcement.start).toDateString() }}
              </td>
              <td class="text-left">
                {{ new Date(announcement.end).toDateString() }}
              </td>
              <td class="text-right">
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item
                        style="cursor: pointer"
                        @click="fillAnnouncementForm(announcement)"
                      >
                        <v-list-item-title class="text-body-2"
                          >Edit</v-list-item-title
                        >

                        <v-dialog
                          width="400"
                          persistent
                          v-model="updateAnnouncements.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Edit {{ announcement?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="updateAnnouncements.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field
                                placeholder="Name"
                                density="compact"
                                variant="outlined"
                                v-model="updateAnnouncements.name"
                              />
                              <v-text-field
                                label="Start Date"
                                density="compact"
                                type="date"
                                variant="outlined"
                                v-model="updateAnnouncements.start"
                                />
                                <v-text-field
                                label="End Date"
                                type="date"
                                density="compact"
                                variant="outlined"
                                v-model="updateAnnouncements.end"
                              />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="updateAnnouncementsItem(announcement)"
                                :loading="updateAnnouncements.loading"
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
                          v-model="deleteAnnouncements.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Delete {{ announcement?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="deleteAnnouncements.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="deleteThisAnnouncement(announcement)"
                                :loading="deleteAnnouncements.loading"
                                class="bg-red text-capitalize"
                                >Delete {{ announcement?.name }}</v-btn
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
    ...mapMutations(["fillAnnouncementForm"]),
    ...mapActions(["updateAnnouncementsItem", "deleteThisAnnouncement"]),
  },

  computed: {
    ...mapGetters(["allAnnouncementArray"]),
    ...mapState(["updateAnnouncements", "deleteAnnouncements"]),
  },
};
</script>
