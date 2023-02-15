<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn class="mb-4 bg-indigo-accent-4" to="/admin/classRooms/create">
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card flat>
        <v-card-title>Classrooms</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left text-capitalize">name</th>
              <th class="text-left text-capitalize">class type</th>
              <th class="text-left text-capitalize">grade profile</th>
              <th class="text-left text-capitalize">level</th>
              <th class="text-left text-capitalize">promotes to</th>
              <th class="text-left text-capitalize">assigned fee</th>
              <th class="text-left text-capitalize">form teacher</th>
              <th class="text-left text-capitalize"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="_class in allClassroomArray" :key="_class.id">
              <td>{{ _class.name }}</td>
              <td class="text-left">{{ _class.classtype }}</td>
              <td
                class="text-left"
                v-if="
                  _class?.gradeprofile != undefined ||
                  _class?.gradeprofile != null
                "
              >
                {{ _class.gradeprofile }}
              </td>
              <td class="text-left">{{ _class.level }}</td>
              <td class="text-left">{{ _class.promotesto }}</td>
              <td class="text-left">{{ _class.assignedfee }}</td>
              <td class="text-left">{{ _class.formteacher }}</td>
              <td class="text-right">
                <v-btn size="x-small" icon flat>
                  <v-icon>mdi-dots-vertical</v-icon>

                  <v-menu activator="parent" :close-on-content-click="false">
                    <v-list width="130" density="compact" class="pa-0 ma-0">
                      <v-list-item
                        style="cursor: pointer"
                        @click="fillClassroomForm(_class)"
                      >
                        <v-list-item-title class="text-body-2"
                          >Edit</v-list-item-title
                        >

                        <v-dialog
                          width="400"
                          persistent
                          v-model="updateClassroom.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Edit {{ _class?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="updateClassroom.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-text>
                              <v-text-field
                                placeholder="Name"
                                density="compact"
                                variant="outlined"
                                v-model="updateClassroom.name"
                              />
                              <v-select
                                v-model="updateClassroom.level"
                                placeholder="Select level"
                                density="compact"
                                variant="outlined"
                                :items="[
                                  'JSS1',
                                  'JSS2',
                                  'JSS3',
                                  'SS1',
                                  'SS2',
                                  'SS3',
                                  'Basic 5',
                                  'Basic 4',
                                  'Basic 3',
                                  'BASIC 4',
                                  'basic 2',
                                  'Basic 1',
                                  'Transition',
                                  'Reception 2',
                                  'Reception 1',
                                  'Preschool',
                                  '1',
                                ]"
                              />
                              <v-select
                                v-model="updateClassroom.classtype"
                                placeholder="Select class type"
                                density="compact"
                                variant="outlined"
                                :items="['Art', 'Science']"
                              />
                              <v-select
                                v-model="updateClassroom.formteacher"
                                placeholder="Select form teacher"
                                density="compact"
                                variant="outlined"
                                :items="[
                                  'UDENTA, FLORENCE E',
                                  'IKECHUKWU, CHIDIEBERE I',
                                  'MALVAN, MALVAN Malvan',
                                  'Akpatang, Henrietta O',
                                  'Nnadi, Judith A',
                                  'OBEY, ESTHER E',
                                  'ONUOHA, GLORIOUS N',
                                  'OKWU, IYKE IFEANYI',
                                  'TAANADEEBA, SORGORTOM S',
                                  'DIDIA, LUCKY EJIKEME',
                                  'MGBAKAR, GIFT CHINENYE',
                                  'MATTHEWS, GRACE CHINYERE',
                                  'ASUO, HART S',
                                  'WILSON, UDOBUNDU A',
                                  'ADE, ALPHONSUS P',
                                  'MATTHEW, GOODLIFE A',
                                  'MONDAY, ESEREGHI VICTORY',
                                  'GBOTOR, ELABANABARI BEN',
                                ]"
                              />
                              <v-select
                                v-model="updateClassroom.promotesto"
                                placeholder="Select promotion class"
                                density="compact"
                                variant="outlined"
                                :items="[
                                  'JSS1',
                                  'JSS2',
                                  'JSS3',
                                  'SS1',
                                  'SS2',
                                  'SS3',
                                  'Basic 5',
                                  'Basic 4',
                                  'Basic 3',
                                  'BASIC 4',
                                  'basic 2',
                                  'Basic 1',
                                  'Transition',
                                  'Reception 2',
                                  'Reception 1',
                                  'Preschool',
                                  '1',
                                ]"
                              />
                              <v-text-field
                                v-model="updateClassroom.assignedfee"
                                placeholder="Assigned fee"
                                density="compact"
                                type="number"
                                variant="outlined"
                              />
                              <v-select
                                v-model="updateClassroom.gradeprofile"
                                placeholder="Select grade profile"
                                density="compact"
                                variant="outlined"
                                :items="['Secondary school', 'MGM', 'New']"
                              />
                            </v-card-text>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="updateClassroomItem(_class)"
                                :loading="updateClassroom.loading"
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
                          v-model="deleteClassroom.dialog"
                          activator="parent"
                        >
                          <v-card>
                            <v-card-title
                              class="d-flex justify-space-between align-center"
                            >
                              Delete {{ _class?.name }}

                              <v-btn
                                icon
                                flat
                                size="small"
                                @click="deleteClassroom.dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </v-card-title>

                            <v-card-actions>
                              <v-btn
                                block
                                @click="deleteClass(_class)"
                                :loading="deleteClassroom.loading"
                                class="bg-red text-capitalize"
                                >Delete {{ _class?.name }}</v-btn
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
    ...mapMutations(["fillClassroomForm"]),
    ...mapActions(["updateClassroomItem", "deleteClass"]),
  },

  computed: {
    ...mapGetters(["allClassroomArray"]),
    ...mapState(["updateClassroom", "deleteClassroom"]),
  },
};
</script>
