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
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getSingleFund(this.$route.params.id);
  },

  methods: {
    ...mapActions(["getSingleFund"]),
  },

  computed: {
    ...mapState(["viewFund"]),
  },
};
</script>

<style>
</style>