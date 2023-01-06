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
        <span class="text-body-1">Session:</span>
        <span class="text-body-1">{{ viewFund.session }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Term:</span>
        <span class="text-body-1">{{ viewFund.term }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Amount:</span>
        <span class="text-body-1">{{ viewFund.amount }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Reason:</span>
        <span class="text-body-1">{{ viewFund.reason }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Transaction type:</span>
        <span class="text-body-1">{{ viewFund.transactiontype }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Created on:</span>
        <span class="text-body-1">{{
          new Date(viewFund.created_at).toDateString()
        }}</span>
      </v-card-text>
      <v-card-text class="d-flex justify-space-between align-center">
        <span class="text-body-1">Updated on:</span>
        <span class="text-body-1">{{
          new Date(viewFund.updated_at).toDateString()
        }}</span>
      </v-card-text>
      <v-card-actions>
        <v-btn
          style="flex: 1"
          class="bg-indigo"
          @click="fillFundForm(viewFund)"
        >
          Edit

          <v-dialog
            width="400"
            persistent
            v-model="editDialog"
            activator="parent"
          >
            <v-card>
              <v-card-title class="d-flex justify-space-between align-center">
                Edit {{ viewFund?.session }}

                <v-btn icon flat size="small" @click="editDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>

              <v-card-text>
                <v-text-field
                  label="Session"
                  density="compact"
                  variant="outlined"
                  v-model="updateFund.session"
                />
                <v-text-field
                  label="Term"
                  density="compact"
                  variant="outlined"
                  v-model="updateFund.term"
                />
                <v-text-field
                  type="number"
                  label="Amount"
                  density="compact"
                  variant="outlined"
                  v-model="updateFund.amount"
                />
                <v-text-field
                  density="compact"
                  variant="outlined"
                  label="Reason"
                  v-model="updateFund.reason"
                />
                <v-text-field
                  density="compact"
                  variant="outlined"
                  label="Transaction type"
                  v-model="updateFund.transactiontype"
                />
                <v-text-field
                  density="compact"
                  variant="outlined"
                  label="Accounting Item"
                  v-model="updateFund.accountingitem"
                />
                <v-text-field
                  density="compact"
                  label="Initiator"
                  variant="outlined"
                  v-model="updateFund.initiator"
                />
              </v-card-text>

              <v-card-actions>
                <v-btn
                  block
                  @click="update(viewFund)"
                  :loading="updateFund.loading"
                  class="bg-indigo text-capitalize"
                  >Update</v-btn
                >
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
                Delete {{ viewFund?.session }}

                <v-btn icon flat size="small" @click="deleteDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>

              <v-card-actions>
                <v-btn
                  block
                  @click="deleteThis"
                  :loading="updateFund.loading"
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
    this.getSingleFund(this.$route.params.id);
  },

  methods: {
    ...mapActions(["getSingleFund"]),
    ...mapMutations(["fillFundForm"]),

    update(fund) {
      this.$store.dispatch("updateFundItem", fund).then(() => {
        this.editDialog = false;
        this.$store.dispatch("getSingleFund", this.$route.params.id);
      });
    },

    deleteThis() {
      this.deleteDialog = false;
      this.$store.dispatch("removeSingleFund", this.$route.params.id);
    },
  },

  computed: {
    ...mapState(["viewFund", "updateFund"]),
  },
};
</script>
