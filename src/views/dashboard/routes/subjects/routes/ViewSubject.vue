<template>
  <v-container class="d-flex justify-center">
    <v-card width="400" max-width="100%">
      <v-toolbar density="compact" color="indigo">
        <v-btn @click="$router.go(-1)" class="bg-indigo-darken-3">
          <v-icon class="mr-4">mdi-arrow-left</v-icon>
          Go back
        </v-btn>
      </v-toolbar>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Name:</span>
        <span class="text-body-1">{{ viewSubject.name }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Code:</span>
        <span class="text-body-1">{{ viewSubject.code }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Class:</span>
        <span class="text-body-1">{{ viewSubject.class }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Parent Subject:</span>
        <span class="text-body-1">{{ viewSubject.parentsubject }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Subject category:</span>
        <span class="text-body-1">{{ viewSubject.subjectcategory }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Show In Subject:</span>
        <span class="text-body-1">{{ viewSubject.showinsubject }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Created on:</span>
        <span class="text-body-1">{{
          new Date(viewSubject.created_at).toDateString()
        }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Updated on:</span>
        <span class="text-body-1">{{
          new Date(viewSubject.updated_at).toDateString()
        }}</span>
      </v-card-text>
      <v-card-actions>
        <v-btn style="flex: 1" class="bg-indigo" @click="fillSubjectForm(viewSubject)">
          Edit

          <v-dialog width="400" persistent v-model="editDialog" activator="parent">
            <v-card>
              <v-card-title class="d-flex justify-space-between align-center">
                Edit {{ viewSubject?.name }}

                <v-btn icon flat size="small" @click="editDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>

              <v-card-text>
                <v-text-field v-model="updateSubject.name" placeholder="First Name" density="compact"
                  variant="outlined" />

                <v-text-field v-model="updateSubject.code" placeholder="Subject Code" density="compact"
                  variant="outlined" />

                <v-select v-model="updateSubject.parentsubject" :items="['Yes', 'No']" placeholder="Parent Subject"
                  density="compact" variant="outlined" />

                <v-text-field v-model="updateSubject.subjectcategory" placeholder="Subject category" density="compact"
                  variant="outlined" />

                <v-text-field v-model="updateSubject.class" placeholder="Class" density="compact" variant="outlined" />

                <v-select v-model="updateSubject.showinsubject" :items="['Yes', 'No']" placeholder="Show In Subject"
                  density="compact" variant="outlined" />
              </v-card-text>

              <v-card-actions>
                <v-btn block @click="update(viewSubject)" :loading="updateSubject.loading"
                  class="bg-indigo text-capitalize">Update</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>

        <v-btn style="flex: 1" class="bg-red">
          Delete

          <v-dialog
            width="400"
            persistent
            activator="parent"
            v-model="deleteDialog"
          >
            <v-card>
              <v-card-title class="d-flex justify-space-between align-center">
                Delete {{ viewSubject?.name }}

                <v-btn icon flat size="small" @click="deleteDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>

              <v-card-actions>
                <v-btn
                  block
                  @click="deleteThis"
                  :loading="updateSubject.loading"
                  class="bg-red text-capitalize"
                  >Delete</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    editDialog: false,
    deleteDialog: false,
  }),
  mounted() {
    this.getSingleSubject(this.$route.params.id);
  },

  methods: {
    ...mapActions(["getSingleSubject"]),
    ...mapMutations(["fillSubjectForm"]),

    update(subject) {
      this.$store.dispatch("updateSubjectItem", subject).then(() => {
        this.editDialog = false;
        this.$store.dispatch("getSingleSubject", this.$route.params.id);
      });
    },

    deleteThis() {
      this.deleteDialog = false;
      this.$store.dispatch("deleteSubject", this.$route.params.id);
    },
  },

  computed: {
    ...mapState(["viewSubject", "updateSubject"]),
  },
};
</script>
