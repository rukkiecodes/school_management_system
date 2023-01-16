<template>
  <v-row justify="center" class="mt-3">
    <v-col cols="12">
      <v-btn
        flat
        class="px-5"
        variant="tonal"
        @click="$router.go(-1)"
        color="indigo text-capitalize "
        ><v-icon class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn
      >
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card flat width="400" max-width="100%">
        <v-card-title>Add Fund</v-card-title>
        <v-card-text>
          <v-text-field
            placeholder="Session"
            hint="2021/2022"
            density="compact"
            variant="outlined"
            v-model="addFund.session"
          />
          <v-text-field
            placeholder="Term"
            hint="2nd Term"
            density="compact"
            variant="outlined"
            v-model="addFund.term"
          />
          <v-text-field
            type="number"
            placeholder="Amount"
            density="compact"
            variant="outlined"
            v-model="addFund.amount"
          />
          <v-text-field
            hint="Petrol"
            placeholder="Reason"
            density="compact"
            variant="outlined"
            v-model="addFund.reason"
          />
          <v-text-field
            hint="outgoing"
            density="compact"
            variant="outlined"
            placeholder="Transaction type"
            v-model="addFund.transactiontype"
          />
          <v-text-field
            hint="john ini"
            placeholder="Initiator"
            density="compact"
            variant="outlined"
            v-model="addFund.accountingitem"
          />
          <v-text-field
            hint="john ini"
            placeholder="Initiator"
            density="compact"
            variant="outlined"
            v-model="addFund.initiator"
          />

          <v-card-actions class="py-0 px-0">
            <v-spacer />
            <v-btn
              @click="addFundItem"
              :loading="addFund.loading"
              class="bg-indigo text-capitalize"
              >Add Fund</v-btn
            >
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["addFundItem"]),
  },

  computed: {
    ...mapState(["addFund"]),
  },
};
</script>
