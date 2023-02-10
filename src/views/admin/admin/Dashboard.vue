<template>
  <v-container fluid class="pa-0">
    <AppBar />
    <Drawer />

    <router-view />
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import AppBar from "./layout/AppBar.vue";
import Drawer from "./layout/Drawer.vue";
export default {
  components: {
    AppBar,
    Drawer,
  },

  created() {
    this.getAllFees();
    this.getAllFunds();
    this.getAllCategories();
    this.getAllPaymentReports();
    this.getAllStaff();
    this.getAllSubject();
    this.getAllSubjectCategory();
    this.getAllStudent();
    this.getAllSClassroomCategory();
    this.getallSClassroomLevel();
    this.getallSClassroomType();
    this.getallClassroom();
    this.getAllDepartments();
    this.getAllAnnouncement();
    this.getAllGrades();
    this.getAllAttendance();
    this.getAllBSGrade();
    this.getAllSessions();
    this.getAllTerms();
    this.getAllSessionAndTerms();
  },

  methods: {
    ...mapActions([
      "getAllFees",
      "getAllFunds",
      "getAllCategories",
      "getAllPaymentReports",
      "getAllStaff",
      "getAllSubject",
      "getAllSubjectCategory",
      "getAllStudent",
      "getAllSClassroomCategory",
      "getallSClassroomLevel",
      "getallSClassroomType",
      "getallClassroom",
      "getAllDepartments",
      "getAllAnnouncement",
      "getAllGrades",
      "getAllAttendance",
      "getAllBSGrade",
      "getAllSessions",
      "getAllTerms",
      "getAllSessionAndTerms"
    ]),
  },
};
</script>
