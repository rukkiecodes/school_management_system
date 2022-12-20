<template>
  <v-navigation-drawer border="0" width="300">
    <v-list density="compact">
      <v-list-subheader>Main</v-list-subheader>

      <div v-for="(route, i) in dashboardRoutes" :key="i">
        <v-list-item
          :to="route.to"
          :value="route.title"
          v-if="route.menu == false"
          active-color="indigo"
        >
          <template v-slot:prepend>
            <v-icon :icon="route.icon"></v-icon>
          </template>

          <v-list-item-title v-text="route.title" class="text-body-2" />
        </v-list-item>

        <div v-else>
          <v-card-actions>
            <v-btn
              color="grey-darken-2"
              class="text-capitalize font-weight-regular"
              variant="text"
            >
              <v-icon size="24" class="mr-8">{{ route.icon }}</v-icon>
              {{ route.name }}
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="route.shadow ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="route.show = !route.show"
            />
          </v-card-actions>

          <v-expand-transition>
            <div v-show="route.show">
              <v-row no-gutters justify="space-between" align="start">
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
                          <v-icon :icon="sub.icon" size="20" />
                        </v-col>
                        <v-col cols="10">
                          <v-row justify="space-between" align="" no-gutters>
                            <v-col cols="9">
                              <span>{{ sub.title }}</span>
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
                            <v-row
                              justify="space-between"
                              align="start"
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
                                        density="compact"
                                        v-for="(subRoute, i) in sub.routes"
                                        :key="i"
                                        :to="subRoute.to"
                                        active-color="indigo"
                                      >
                                        <v-list-item-title
                                          class="text-body-2"
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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["dashboardRoutes"]),
  },
};
</script>