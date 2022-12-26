<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn
        elevation="3"
        class="rounded-lg"
        to="/dashboard/grading/configureGrading/createGradeLetter"
      >
        <v-icon class="mr-2">mdi-home</v-icon>
        <span class="text-capitalize">Add new Grade Letter</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card elevation="3" class="rounded-lg">
        <v-card-title>List of Grade letters</v-card-title>
        <v-card-actions>
          <v-text-field
            label="Filter"
            density="compact"
            variant="underlined"
            prepend-inner-icon="mdi-magnify"
          />
        </v-card-actions>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-col>
  </v-row>
</template>
  
  <script>
export default {
  data: () => ({
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
      },
      {
        name: "Eclair",
        calories: 262,
      },
      {
        name: "Cupcake",
        calories: 305,
      },
      {
        name: "Gingerbread",
        calories: 356,
      },
      {
        name: "Jelly bean",
        calories: 375,
      },
      {
        name: "Lollipop",
        calories: 392,
      },
      {
        name: "Honeycomb",
        calories: 408,
      },
      {
        name: "Donut",
        calories: 452,
      },
      {
        name: "KitKat",
        calories: 518,
      },
    ],
  }),
};
</script>