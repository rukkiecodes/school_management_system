<template>
  <v-container fluid class="dashboard ma-0 pa-0">
    <div class="glass" />
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
      "getallSClassroomLevel"
    ]),
  },
};
</script>

<style scoped>
.dashboard {
  background-image: url(https://res.cloudinary.com/rukkiecodes/image/upload/v1672097949/bg_tfeymr.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;
  height: 100%;
}

.dashboard .glass {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>