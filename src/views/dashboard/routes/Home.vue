<template>
  <v-container class="bd-transparent">
    <BarVue />

    <v-row justify="space-between" class="my-10">
      <v-col cols="12" sm="6" md="3" v-for="(card, i) in cards" :key="i">
        <v-card elevation="2" class="rounded-lg px-4" :to="card.to">
          <v-card-text>
            <v-row justify="space-between">
              <v-col cols="3" md="4" class="d-flex justify-end align-center">
                <v-avatar size="60" :color="`${card.color}-lighten-5`">
                  <v-icon :color="card.color" size="30">{{ card.icon }}</v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="8" class="d-flex flex-column align-end">
                <span class="text-h6 font-weight-medium">{{ card.count }}</span>
                <span class="text-caption text-uppercase">{{ card.area }}</span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card elevation="3" class="rounded-lg">
      <v-card-title> Student and Staff Growth </v-card-title>
      <v-card-text>
        <Line :data="data" :options="options" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import BarVue from "./components/Bar.vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: { Line, BarVue },

  data: () => ({
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Students",
          backgroundColor: "#3F51B5",
          data: [0, 50, 20, 60, 20, 100, 150, 50, 60, 55, 100, 120],
        },
        {
          label: "Staff",
          backgroundColor: "#f87979",
          data: [40, 39, 10, 40, 39, 80, 40, 80, 50, 30, 50, 50],
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: true,
    },

    cards: [
      {
        icon: "mdi-home",
        count: 15,
        area: "classes",
        color: "green",
        to: "/dashboard/classRooms",
      },
      {
        icon: "mdi-book-open-variant",
        count: 46,
        area: "courses",
        color: "indigo",
        to: "/dashboard/subjects",
      },
      {
        icon: "mdi-account-group",
        count: 15,
        area: "students",
        color: "blue",
        to: "/dashboard/students",
      },
      {
        icon: "mdi-account",
        count: 15,
        area: "staffs",
        color: "red",
        to: "/dashboard/staffs",
      },
    ],
  }),
};
</script>
