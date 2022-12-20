<template>
  <v-navigation-drawer border="0" width="300">
    <v-list density="compact">
      <v-list-subheader>Main</v-list-subheader>

      <div v-for="(route, i) in dashboardRoutes" :key="i">
        <v-list-item
          :to="route.to"
          :value="route.title"
          v-if="route.menu == false"
          active-color="primary"
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
                  <v-list density="compact">
                    <v-list-item
                      v-for="(sub, i) in route.routes"
                      :key="i"
                      :to="sub.to"
                      active-color="indigo"
                    >
                      <template v-slot:prepend>
                        <v-icon :icon="sub.icon" size="20" />
                      </template>

                      <v-list-item-title
                        v-text="sub.title"
                        class="text-body-2"
                      />
                    </v-list-item>
                  </v-list>
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