<template>
    <v-row justify="center">
        <v-col cols="12">
            <v-btn flat class="px-5" variant="tonal" @click="$router.go(-1)"
                color="indigo text-capitalize "><v-icon class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
            <v-card class="mt-10" width="400" max-width="100%">
                <v-card-title>Add Budget</v-card-title>
                <v-card-text>
                    <v-row justify="space-between">
                        <v-col cols="12">
                            <v-text-field v-model="addBudget.session" label="Session" density="compact" variant="outlined" hide-details />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="addBudget.firstterm" label="First Term" density="compact" variant="outlined" hide-details />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="addBudget.secondterm" label="Second Term" density="compact" variant="outlined" hide-details />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="addBudget.thirdterm" label="Third Term" density="compact" variant="outlined" hide-details />
                        </v-col>
                        <v-col cols="12">
                            <v-select v-model="addBudget.accountingitem" :items="[]"  label="Accounting item" density="compact" variant="outlined" hide-details />
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="addBudgetItem" block :loading="addBudget.loading" class="text-capitalize bg-indigo px-5">Create</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    methods: {
        ...mapActions(["addBudgetItem"])
    },

    computed: {
        ...mapState(["addBudget"])
    }
}
</script>