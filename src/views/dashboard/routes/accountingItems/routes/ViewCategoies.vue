<template>
    <v-row justify="space-between" class="my-10">
        <v-col cols="12">
            <v-btn class="mb-4" to="/dashboard/accountingItems/createCategoies">
                <span class="text-capitalize">Add Category</span>
            </v-btn>
        </v-col>
        <v-col cols="12">
            <v-card>
                <v-card-title>All Categories</v-card-title>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">ID</th>
                            <th class="text-left">Name</th>
                            <th class="text-left">Description</th>
                            <th class="text-left">Main Category</th>
                            <th class="text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(category, i) in allCategories" :key="i">
                            <td>{{ category?.id }}</td>
                            <td>{{ category?.name }}</td>
                            <td>{{ category?.description }}</td>
                            <td>{{ category?.maincategory }}</td>

                            <td>
                                <v-btn size="x-small" icon flat>
                                    <v-icon>mdi-dots-vertical</v-icon>

                                    <v-menu activator="parent">
                                        <v-list width="130" density="compact" class="pa-0 ma-0">
                                            <v-list-item style="cursor: pointer" @click="fillCategoryForm(category)">
                                                <v-list-item-title class="text-body-2">Edit</v-list-item-title>

                                                <v-dialog width="400" persistent v-model="updateCategory.dialog"
                                                    activator="parent">
                                                    <v-card>
                                                        <v-card-title class="d-flex justify-space-between align-center">
                                                            Edit {{ category?.session }}

                                                            <v-btn icon flat size="small"
                                                                @click="updateCategory.dialog = false">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-card-title>

                                                        <v-card-text>
                                                            <v-text-field placeholder="Categoty Name" density="compact"
                                                                variant="outlined" v-model="updateCategory.name" />
                                                            <v-text-field placeholder="Categoty Name" density="compact"
                                                                variant="outlined"
                                                                v-model="updateCategory.description" />
                                                            <v-select v-model="updateCategory.maincategory"
                                                                placeholder="Main Category" density="compact"
                                                                variant="outlined" hide-details
                                                                :items="['Asset', 'Liability', 'Capital', 'Income', 'Expense']" />
                                                        </v-card-text>

                                                        <v-card-actions>
                                                            <v-btn block @click="updateCategoryItem(category)"
                                                                :loading="updateCategory.loading"
                                                                class="bg-indigo text-capitalize">Update</v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                            </v-list-item>

                                            <v-list-item style="cursor: pointer"
                                                :to="`/dashboard/accountingItems/${category?.id}`">
                                                <v-list-item-title class="text-body-2">View Fund</v-list-item-title>
                                            </v-list-item>

                                            <v-list-item style="cursor: pointer">
                                                <v-list-item-title
                                                    class="text-body-2 text-red">Delete</v-list-item-title>

                                                <v-dialog width="400" persistent activator="parent"
                                                    v-model="deleteSingleCategory.dialog">
                                                    <v-card>
                                                        <v-card-title class="d-flex justify-space-between align-center">
                                                            Delete {{ category?.name }}

                                                            <v-btn icon flat size="small"
                                                                @click="deleteSingleCategory.dialog = false">
                                                                <v-icon>mdi-close</v-icon>
                                                            </v-btn>
                                                        </v-card-title>

                                                        <v-card-actions>
                                                            <v-btn block class="bg-red text-capitalize"
                                                                @click="removeSingleCategory(category?.id)"
                                                                :loading="deleteSingleCategory.loading">Delete</v-btn>
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
        ...mapActions(["updateCategoryItem", "deleteFee", "removeSingleCategory"]),

        ...mapMutations(["fillCategoryForm"]),
    },

    computed: {
        ...mapGetters(["allCategories"]),
        ...mapState(["updateCategory", "deleteFees", "deleteSingleCategory"]),
    },
};
</script>
