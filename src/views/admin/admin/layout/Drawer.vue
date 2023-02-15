<template>
  <v-navigation-drawer
    :border="0"
    width="280"
    v-model="dashboard.drawer"
  >
    <v-list density="compact">
      <div v-for="(route, i) in dashboardRoutes" :key="i">
        <v-list-item
          :to="route.to"
          :value="route.title"
          v-if="route.menu == false"
          active-color="indigo-accent-4"
        >
          <template v-slot:prepend>
            <v-icon size="18" :icon="route.icon"></v-icon>
          </template>

          <v-list-item-title v-text="route.title" class="text-caption" />
        </v-list-item>

        <div v-else>
          <v-card-actions class="px-0">
            <v-btn
              block
              height="40"
              variant="text"
              color="grey-darken-2"
              @click="route.show = !route.show"
              :class="route.show ? 'bg-indigo-lighten-5' : 'bg-white'"
              class="
                text-capitalize
                font-weight-regular
                d-flex
                justify-start
                align-center
                px-4
              "
            >
              <v-icon size="18" class="mr-8">{{ route.icon }}</v-icon>
              <span class="text-caption">{{ route.name }}</span>
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="route.show">
              <v-row no-gutters justify="space-between">
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <v-card
                    flat
                    :key="i"
                    :to="sub.to"
                    v-for="(sub, i) in route.routes"
                  >
                    <v-card-text class="py-1">
                      <v-row justify="space-between" dense>
                        <v-col cols="12">
                          <v-row justify="space-between" no-gutters>
                            <v-btn
                              block
                              variant="text"
                              @click="sub.show = !sub.show"
                              class="d-flex justify-start align-center"
                            >
                              <v-icon
                                :icon="sub.icon"
                                size="18"
                                class="text-grey-darken-2"
                              />
                              <span
                                class="text-caption ml-4 text-grey-darken-2"
                                >{{ sub.title }}</span
                              >
                            </v-btn>
                            <v-row
                              justify="space-between"
                              class="mt-3"
                              no-gutters
                            >
                              <v-col cols="1"></v-col>
                              <v-col cols="11">
                                <v-expand-transition>
                                  <v-card
                                    flat
                                    v-show="sub.show"
                                    class="pa-0 ma-0"
                                  >
                                    <v-list density="compact" class="pa-0 ma-0">
                                      <v-list-item
                                        :key="i"
                                        :to="subRoute.to"
                                        density="compact"
                                        active-color="indigo-accent-4"
                                        v-for="(subRoute, i) in sub.routes"
                                      >
                                        <v-list-item-title
                                          class="
                                            text-caption text-grey-darken-2
                                          "
                                          v-text="subRoute.title"
                                        ></v-list-item-title>
                                      </v-list-item>
                                    </v-list>
                                  </v-card>
                                </v-expand-transition>
                              </v-col>
                            </v-row>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-expand-transition>
        </div>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useDisplay } from "vuetify";
import { mapGetters, mapState } from "vuex";
export default {
  created() {
    this.drawerVisibility();
  },

  methods: {
    drawerVisibility() {
      switch (useDisplay().name.value) {
        case "xs":
          return (this.dashboard.drawer = false);
        case "sm":
          return (this.dashboard.drawer = false);
        case "md":
          return (this.dashboard.drawer = false);
        case "lg":
          return (this.dashboard.drawer = true);
        case "xl":
          return (this.dashboard.drawer = true);
        case "xxl":
          return (this.dashboard.drawer = true);
      }
    },
  },

  computed: {
    ...mapGetters(["dashboardRoutes"]),
    ...mapState(["dashboard"]),
  },
};
</script>

<style>
.v-navigation-drawer__content::-webkit-scrollbar {
  width: 3px;
}

.v-navigation-drawer__content::-webkit-scrollbar-track {
  background: #ffffff;
}

.v-navigation-drawer__content::-webkit-scrollbar-thumb {
  background-color: #e8ebf6;
  border-radius: 20px;
}
</style>