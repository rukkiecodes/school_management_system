<template>
  <v-navigation-drawer border="0" width="280" v-model="appDrawer">
    <v-list density="compact">
      <v-list-subheader>Main menu</v-list-subheader>

      <div v-for="(route, i) in dashboardRoutes" :key="i">
        <v-list-item
          :to="route.to"
          :value="route.title"
          v-if="route.menu == false"
          active-color="indigo"
        >
          <template v-slot:prepend>
            <v-icon size="18" :icon="route.icon"></v-icon>
          </template>

          <v-list-item-title v-text="route.title" class="text-caption" />
        </v-list-item>

        <div v-else>
          <v-card-actions>
            <v-btn
              color="grey-darken-2"
              class="text-capitalize font-weight-regular"
              variant="text"
            >
              <v-icon size="18" class="mr-8">{{ route.icon }}</v-icon>
              <span class="text-caption">{{ route.name }}</span>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="route.shadow ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="route.show = !route.show"
            />
          </v-card-actions>

          <v-expand-transition>
            <div v-show="route.show">
              <v-row no-gutters justify="space-between">
                <v-col cols="1"></v-col>
                <v-col cols="11">
                  <v-card
                    v-for="(sub, i) in route.routes"
                    :key="i"
                    :to="sub.to"
                    flat
                  >
                    <v-card-text>
                      <v-row justify="space-between" dense>
                        <v-col cols="2" class="text-center">
                          <v-icon :icon="sub.icon" size="18" />
                        </v-col>
                        <v-col cols="10">
                          <v-row justify="space-between" no-gutters>
                            <v-col cols="9">
                              <span class="text-caption">{{ sub.title }}</span>
                            </v-col>
                            <v-col cols="3" v-if="sub.menu">
                              <v-btn
                                flat
                                size="x-small"
                                class="mt-0"
                                @click="sub.show = !sub.show"
                              >
                                <v-icon size="18">{{
                                  sub.shadow
                                    ? "mdi-chevron-up"
                                    : "mdi-chevron-down"
                                }}</v-icon>
                              </v-btn>
                            </v-col>
                            <v-row justify="space-between" no-gutters>
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
                                        density="compact"
                                        v-for="(subRoute, i) in sub.routes"
                                        :key="i"
                                        :to="subRoute.to"
                                        active-color="indigo"
                                      >
                                        <v-list-item-title
                                          class="text-caption"
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
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["dashboardRoutes"]),
    ...mapState(["appDrawer"]),
    appDrawer: {
      get() {
        return this.$store.state.appDrawer;
      },
      set(val) {
        return (this.$store.state.appDrawer = val);
      },
    },
  },
};
</script>

<style>
.v-navigation-drawer__content::-webkit-scrollbar {
  width: 3px;
}

.v-navigation-drawer__content::-webkit-scrollbar-track {
  background: #ffffff
}

.v-navigation-drawer__content::-webkit-scrollbar-thumb {
  background-color: #E8EBF6;
  border-radius: 20px;
}
</style>