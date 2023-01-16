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
                <span class="text-body-1">{{ viewCategory.name }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Description:</span>
                <span class="text-body-1">{{ viewCategory.description }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Main Category:</span>
                <span class="text-body-1">{{ viewCategory.maincategory }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Created on:</span>
                <span class="text-body-1">{{
                    new Date(viewCategory.created_at).toDateString()
                }}</span>
            </v-card-text>
            <v-card-text class="d-flex justify-space-between align-center">
                <span class="text-body-1">Updated on:</span>
                <span class="text-body-1">{{
                    new Date(viewCategory.updated_at).toDateString()
                }}</span>
            </v-card-text>
            <v-card-actions>
                <v-btn style="flex: 1" class="bg-indigo" @click="fillCategoryForm(viewCategory)">
                    Edit

                    <v-dialog width="400" persistent v-model="editDialog" activator="parent">
                        <v-card>
                            <v-card-title class="d-flex justify-space-between align-center">
                                Edit {{ viewCategory?.session }}

                                <v-btn icon flat size="small" @click="editDialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>

                            <v-card-text>
                                <v-text-field placeholder="Categoty Name" density="compact" variant="outlined"
                                    v-model="updateCategory.name" />
                                <v-text-field placeholder="Categoty Name" density="compact" variant="outlined"
                                    v-model="updateCategory.description" />
                                <v-select v-model="updateCategory.maincategory" placeholder="Main Category" density="compact"
                                    variant="outlined" hide-details
                                    :items="['Asset', 'Liability', 'Capital', 'Income', 'Expense']" />
                            </v-card-text>

                            <v-card-actions>
                                <v-btn block @click="update(viewCategory)" :loading="updateCategory.loading"
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
                                Delete {{ viewCategory?.session }}

                                <v-btn icon flat size="small" @click="deleteDialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-title>

                            <v-card-actions>
                                <v-btn block @click="deleteThis" :loading="updateCategory.loading"
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
        this.getSingleCategory(this.$route.params.id);
    },

    methods: {
        ...mapActions(["getSingleCategory"]),
        ...mapMutations(["fillCategoryForm"]),

        update(category) {
            this.$store.dispatch("updateCategoryItem", category).then(() => {
                this.editDialog = false;
                this.$store.dispatch("getSingleCategory", this.$route.params.id);
            });
        },

        deleteThis() {
            this.deleteDialog = false;
            this.$store.dispatch("removeSingleCategory", this.$route.params.id);
        },
    },

    computed: {
        ...mapState(["viewCategory", "updateCategory"]),
    },
};
</script>
