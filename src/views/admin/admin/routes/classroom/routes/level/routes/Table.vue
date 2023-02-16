<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="mb-4 bg-indigo-accent-4" :to="`${$route.path}/create`">
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card flat>
        <v-card-title>Classroom categories</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left text-capitalize">name</th>
              <th class="text-left text-capitalize">Category</th>
              <th class="text-left text-capitalize">graduation level</th>
              <th class="text-left text-capitalize">Created on</th>
              <th class="text-left text-capitalize">updated on</th>
              <th class="text-left text-capitalize"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="level in allClassroomLevel" :key="level.id">
              <td>{{ level.name }}</td>
              <td class="text-left">{{ level.category }}</td>
              <td class="text-left">{{ level.graduationlevel }}</td>
              <td class="text-left">
                {{ new Date(level.created_at).toDateString() }}
              </td>
              <td class="text-left">
                {{ new Date(level.updated_at).toDateString() }}
              </td>
              <td class="text-right">
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item
                        style="cursor: pointer"
                        @click="fillClassroomLevelForm(level)"
                      >
                        <v-list-item-title class="text-body-2"
                          >Edit</v-list-item-title
                        >

                        <v-dialog
                          width="400"
                          persistent
                          v-model="updateClassroomLevel.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Edit {{ level?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="updateClassroomLevel.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field
                                v-model="updateClassroomLevel.name"
                                placeholder="Class Level(name)"
                                density="compact"
                                variant="outlined"
                              />
                              <v-select
                                v-model="updateClassroomLevel.category"
                                placeholder="Class level"
                                density="compact"
                                variant="outlined"
                                :items="['Nursery', 'Primary', 'Secondary']"
                              />
                              <v-select
                                v-model="updateClassroomLevel.graduationlevel"
                                placeholder="Class level"
                                density="compact"
                                variant="outlined"
                                :items="['Yes', 'No']"
                              />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="updateClassroomLevelItem(level)"
                                :loading="updateClassroomLevel.loading"
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
                          v-model="deleteClassroomLevel.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Delete {{ level?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="deleteClassroomLevel.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="deleteClassLevel(level)"
                                :loading="deleteClassroomLevel.loading"
                                class="bg-red text-capitalize"
                                >Delete {{ level?.name }}</v-btn
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
    ...mapMutations(["fillClassroomLevelForm"]),
    ...mapActions(["updateClassroomLevelItem", "deleteClassLevel"]),
  },

  computed: {
    ...mapGetters(["allClassroomLevel"]),
    ...mapState(["updateClassroomLevel", "deleteClassroomLevel"]),
  },
};
</script>
