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
                <span class="text-body-1">{{ viewStudent.firstname }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Last name:</span>
                <span class="text-body-1">{{ viewStudent.lastname }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Other name:</span>
                <span class="text-body-1">{{ viewStudent.othername }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Phone:</span>
                <span class="text-body-1">{{ viewStudent.phone }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Email:</span>
                <span class="text-body-1">{{ viewStudent.email }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Next Of Kin:</span>
                <span class="text-body-1">{{ viewStudent.nextofkin }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Address:</span>
                <span class="text-body-1">{{ viewStudent.address }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Gender:</span>
                <span class="text-body-1">{{ viewStudent.gender }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Classroom:</span>
                <span class="text-body-1">{{ viewStudent.classroom }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Created on:</span>
                <span class="text-body-1">{{
                    new Date(viewStudent.created_at).toDateString()
                }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Updated on:</span>
                <span class="text-body-1">{{
                    new Date(viewStudent.updated_at).toDateString()
                }}</span>
            </v-card-text>
            <v-card-actions>
                <v-btn style="flex: 1" class="bg-indigo" @click="fillStudentForm(viewStudent)">
                    Edit

                    <v-dialog width="400" persistent v-model="editDialog" activator="parent">
                        <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                                Edit {{ viewStudent?.session }}

                                <v-btn icon flat size="small" @click="editDialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>

                            <v-card-text>
                                <v-text-field v-model="updateStudent.firstname" placeholder="First Name"
                                    density="compact" variant="outlined" />
                                <v-text-field v-model="updateStudent.lastname" placeholder="Last name" density="compact"
                                    variant="outlined" />
                                <v-text-field v-model="updateStudent.othername" placeholder="Other name"
                                    density="compact" variant="outlined" />
                                <v-text-field v-model="updateStudent.phone" placeholder="Phone" density="compact"
                                    variant="outlined" />
                                <v-text-field v-model="updateStudent.email" placeholder="Email" density="compact"
                                    variant="outlined" />
                                <v-text-field v-model="updateStudent.nextofkin" placeholder="Next Of Kin"
                                    density="compact" variant="outlined" />
                                <v-text-field v-model="updateStudent.address" placeholder="Address" density="compact"
                                    variant="outlined" />
                                <v-select v-model="updateStudent.gender" :items="['male', 'Female']"
                                    placeholder="department" density="compact" variant="outlined" />
                                <v-text-field v-model="updateStudent.classroom" placeholder="Classroom"
                                    density="compact" variant="outlined" />
                                <v-text-field v-model="updateStudent.assignedfee" placeholder="Assigned Fee"
                                    density="compact" variant="outlined" />
                            </v-card-text>

                            <v-card-actions>
                                <v-btn block @click="update(viewStudent)" :loading="updateStudent.loading"
                                    class="bg-indigo-accent-4 text-capitalize">Update</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-btn>

                <v-btn style="flex: 1" class="bg-red">
                    Delete

                    <v-dialog width="400" persistent activator="parent" v-model="deleteDialog">
                        <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                                Delete {{ viewStudent?.firstname }} {{ viewStudent?.lastname }}

                                <v-btn icon flat size="small" @click="deleteDialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>

                            <v-card-actions>
                                <v-btn block @click="deleteThis(viewStudent)" :loading="updateStudent.loading"
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
        this.getSingleStudent(this.$route.params.id);
    },

    methods: {
        ...mapActions(["getSingleStudent"]),
        ...mapMutations(["fillStudentForm"]),

        update(student) {
            this.$store.dispatch("updateStudentItem", student).then(() => {
                this.editDialog = false;
                this.$store.dispatch("getSingleStudent", this.$route.params.id);
            });
        },

        deleteThis(viewStudent) {
            this.$store.dispatch("deleteStudent", viewStudent)
                .then(() => this.deleteDialog = false)

        },
    },

    computed: {
        ...mapState(["viewStudent", "updateStudent"]),
    },
};
</script>
