<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="mb-4" to="/admin/departments/create">
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card class="">
        <v-card-title>Department List</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left text-capitalize">name</th>
              <th class="text-left text-capitalize">Created At</th>
              <th class="text-left text-capitalize">Updated At</th>
              <th class="text-left text-capitalize"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="department in allDepartmentArray" :key="department.id">
              <td>{{ department.name }}</td>
              <td class="text-left">
                {{ new Date(department.created_at).toDateString() }}
              </td>
              <td class="text-left">
                {{ new Date(department.updated_at).toDateString() }}
              </td>
              <td class="text-right">
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item
                        style="cursor: pointer"
                        @click="fillDepartmentForm(department)"
                      >
                        <v-list-item-title class="text-body-2"
                          >Edit</v-list-item-title
                        >

                        <v-dialog
                          width="400"
                          persistent
                          v-model="updateDepartment.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Edit {{ department?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="updateDepartment.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field
                                placeholder="Name"
                                density="compact"
                                variant="outlined"
                                v-model="updateDepartment.name"
                              />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="updateDepartmentItem(department)"
                                :loading="updateDepartment.loading"
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
                          v-model="deleteDepartment.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Delete {{ department?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="deleteDepartment.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="deleteThisDepartment(department)"
                                :loading="deleteDepartment.loading"
                                class="bg-red text-capitalize"
                                >Delete {{ department?.name }}</v-btn
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
    ...mapMutations(["fillDepartmentForm"]),
    ...mapActions(["updateDepartmentItem", "deleteThisDepartment"]),
  },

  computed: {
    ...mapGetters(["allDepartmentArray"]),
    ...mapState(["updateDepartment", "deleteDepartment"]),
  },
};
</script>
