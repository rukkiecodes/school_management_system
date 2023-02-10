<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-card class="">
        <v-card-title>Sessions and Term List</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left text-capitalize">Term Name</th>
              <th class="text-left text-capitalize">Created At</th>
              <th class="text-left text-capitalize">Updated At</th>
              <th class="text-left text-capitalize"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="term in allSessionAndTermArray" :key="term.id">
              <td>{{ term.termname }}</td>
              <td class="text-left">
                {{ new Date(term.created_at).toDateString() }}
              </td>
              <td class="text-left">
                {{ new Date(term.updated_at).toDateString() }}
              </td>
              <td class="text-right">
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item
                        style="cursor: pointer"
                        @click="fillSessionAndTermForm(term)"
                      >
                        <v-list-item-title class="text-body-2"
                          >Edit</v-list-item-title
                        >

                        <v-dialog
                          width="400"
                          persistent
                          v-model="updateSessionAndTerm.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Edit {{ term?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="updateSessionAndTerm.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field
                                placeholder="Name"
                                density="compact"
                                variant="outlined"
                                v-model="updateSessionAndTerm.name"
                              />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="updateSessionAndTermItem(term)"
                                :loading="updateSessionAndTerm.loading"
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
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  methods: {
    ...mapMutations(["fillSessionAndTermForm"]),
    ...mapActions(["updateSessionAndTermItem"]),
  },

  computed: {
    ...mapGetters(["allSessionAndTermArray"]),
    ...mapState(["updateSessionAndTerm"]),
  },
};
</script>
