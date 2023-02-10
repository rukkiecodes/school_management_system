<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="mb-4" to="/admin/classRooms/category/create">
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card class="">
        <v-card-title>Classroom categories</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left text-capitalize">name</th>
              <th class="text-left text-capitalize">level</th>
              <th class="text-left text-capitalize">Created on</th>
              <th class="text-left text-capitalize">updated on</th>
              <th class="text-left text-capitalize"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in allClassroomCategories" :key="category.id">
              <td>{{ category.name }}</td>
              <td class="text-left">{{ category.level }}</td>
              <td class="text-left">{{ new Date(category.created_at).toDateString() }}</td>
              <td class="text-left">{{ new Date(category.updated_at).toDateString() }}</td>
              <td class="text-right">
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item style="cursor: pointer" @click="fillClassroomCategoryForm(category)">
                        <v-list-item-title class="text-body-2">Edit</v-list-item-title>

                        <v-dialog width="400" persistent v-model="updateClassroomCategory.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Edit {{ category?.name }}

                              <v-btn icon flat size="small" @click="updateClassroomCategory.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field v-model="updateClassroomCategory.name" placeholder="Class Category(name)"
                                density="compact" variant="outlined" />
                              <v-select v-model="updateClassroomCategory.level" placeholder="Class level category"
                                density="compact" variant="outlined" :items="['Nursery', 'Primary', 'Secondary']" />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn block @click="updateClassroomCategoryItem(category)"
                                :loading="updateClassroomCategory.loading"
                                class="bg-indigo-accent-4 text-capitalize">Update</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-list-item>

                      <v-list-item style="cursor: pointer">
                        <v-list-item-title class="text-body-2 text-red">Delete</v-list-item-title>

                        <v-dialog width="400" persistent v-model="deleteClassroomCategory.dialog" activator="parent">
                          <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                              Delete {{ category?.name }}

                              <v-btn icon flat size="small" @click="deleteClassroomCategory.dialog = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn block @click="deleteClassCategory(category)"
                                :loading="deleteClassroomCategory.loading" class="bg-red text-capitalize">Delete {{
  category?.name
                                }}</v-btn>
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
    ...mapMutations(["fillClassroomCategoryForm"]),
    ...mapActions(["updateClassroomCategoryItem", "deleteClassCategory"]),
  },

  computed: {
    ...mapGetters(["allClassroomCategories"]),
    ...mapState(["updateClassroomCategory", "deleteClassroomCategory"])
  },
};
</script>
