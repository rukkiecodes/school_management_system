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
                <span class="text-body-1">First name:</span>
                <span class="text-body-1">{{ viewStaff.firstname }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Last name:</span>
                <span class="text-body-1">{{ viewStaff.lastname }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Other name:</span>
                <span class="text-body-1">{{ viewStaff.othername }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Phone:</span>
                <span class="text-body-1">{{ viewStaff.phone }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Email:</span>
                <span class="text-body-1">{{ viewStaff.email }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Next Of Kin:</span>
                <span class="text-body-1">{{ viewStaff.nextofkin }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Address:</span>
                <span class="text-body-1">{{ viewStaff.address }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Department:</span>
                <span class="text-body-1">{{ viewStaff.department }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Role:</span>
                <span class="text-body-1">{{ viewStaff.role }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Created on:</span>
                <span class="text-body-1">{{
                    new Date(viewStaff.created_at).toDateString()
                }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Updated on:</span>
                <span class="text-body-1">{{
                    new Date(viewStaff.updated_at).toDateString()
                }}</span>
            </v-card-text>
            <v-card-actions>
                <v-btn style="flex: 1" class="bg-indigo" @click="fillStaffUpdateForm(viewStaff)">
                    Edit

                    <v-dialog width="400" persistent v-model="editDialog" activator="parent">
                        <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                                Edit {{ viewStaff?.session }}

                                <v-btn icon flat size="small" @click="editDialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>

                            <v-card-text>
                                <v-text-field v-model="updateStaff.firstname" label="First Name" density="compact"
                                    variant="outlined" />
                                <v-text-field v-model="updateStaff.lastname" label="Last name" density="compact"
                                    variant="outlined" />
                                <v-text-field v-model="updateStaff.othername" label="Other name" density="compact"
                                    variant="outlined" />
                                <v-text-field v-model="updateStaff.phone" label="Phone" density="compact"
                                    variant="outlined" />
                                <v-text-field v-model="updateStaff.email" label="Email" density="compact"
                                    variant="outlined" />
                                <v-text-field v-model="updateStaff.nextofkin" label="Next Of Kin" density="compact"
                                    variant="outlined" />
                                <v-text-field v-model="updateStaff.address" label="Address" density="compact"
                                    variant="outlined" />
                                <v-select v-model="updateStaff.department"
                                    :items="['ICT', 'Early year', 'Primary', 'Secondary']" label="department"
                                    density="compact" variant="outlined" />
                                <v-text-field v-model="updateStaff.role" label="Role" density="compact"
                                    variant="outlined" />
                            </v-card-text>

                            <v-card-actions>
                                <v-btn block @click="update(viewStaff)" :loading="updateStaff.loading"
                                    class="bg-indigo text-capitalize">Update</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-btn>

                <v-btn style="flex: 1" class="bg-red">
                    Delete

                    <v-dialog width="400" persistent activator="parent" v-model="deleteDialog">
                        <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                                Delete {{ viewStaff?.firstname }} {{ viewStaff?.lastname }}

                                <v-btn icon flat size="small" @click="deleteDialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>

                            <v-card-actions>
                                <v-btn block @click="deleteThis(viewStaff)" :loading="updateStaff.loading"
                                    class="bg-red text-capitalize">Delete</v-btn>
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
        this.getSingleStaff(this.$route.params.id);
    },

    methods: {
        ...mapActions(["getSingleStaff"]),
        ...mapMutations(["fillStaffUpdateForm"]),

        update(staff) {
            this.$store.dispatch("updateStaffItem", staff).then(() => {
                this.editDialog = false;
                this.$store.dispatch("getSingleStaff", this.$route.params.id);
            });
        },

        deleteThis(viewStaff) {
            this.$store.dispatch("deleteStaff", viewStaff)
                .then(() => this.deleteDialog = false)

        },
    },

    computed: {
        ...mapState(["viewStaff", "updateStaff"]),
    },
};
</script>
