<template>
  <v-row justify="center" class="mt-3">
    <v-col cols="12">
      <v-btn
        flat
        class="px-5"
        variant="tonal"
        @click="$router.go(-1)"
        color="indigo text-capitalize "
        ><v-icon class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn
      >
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card width="400" max-width="100%" elevation="5">
        <v-card-title> Add Class Room </v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-text-field
                placeholder="Name"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-select
                placeholder="Select class Type"
                density="compact"
                variant="outlined"
                hide-details
                :items="['General', 'Basic', 'Reception/ Preschool']"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                placeholder="Select form teacher"
                density="compact"
                variant="outlined"
                hide-details
                :items="[
                  'UDENTA, FLORENCE E',
                  'IKECHUKWU, CHIDIEBERE I',
                  'MALVAN, MALVAN Malvan',
                  'Akpatang, Henrietta O',
                  'Nnadi, Judith A',
                  'OBEY, ESTHER E',
                  'ONUOHA, GLORIOUS N',
                  'OKWU, IYKE IFEANYI',
                  'TAANADEEBA, SORGORTOM S',
                  'DIDIA, LUCKY EJIKEME',
                  'MGBAKAR, GIFT CHINENYE',
                  'MATTHEWS, GRACE CHINYERE',
                  'ASUO, HART S',
                  'WILSON, UDOBUNDU A',
                  'ADE, ALPHONSUS P',
                  'MATTHEW, GOODLIFE A',
                  'MONDAY, ESEREGHI VICTORY',
                  'GBOTOR, ELABANABARI BEN',
                ]"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                placeholder="Select grade profile"
                density="compact"
                variant="outlined"
                hide-details
                :items="['Secondary school', 'MGM', 'New']"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                placeholder="Select promotion classroom"
                density="compact"
                variant="outlined"
                hide-details
                :items="[
                  'JSS1',
                  'JSS2',
                  'JSS3',
                  'SS1',
                  'SS2',
                  'SS3',
                  'Basic 5',
                  'Basic 4',
                  'Basic 3',
                  'BASIC 4',
                  'basic 2',
                  'Basic 1',
                  'Transition',
                  'Reception 2',
                  'Reception 1',
                  'Preschool',
                  '1',
                ]"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                placeholder="Assigned Fee"
                density="compact"
                variant="outlined"
                hide-details
                :items="[]"
              />
            </v-col>
          </v-row>
          <v-card-actions class="px-0 mt-3">
            <v-spacer />

            <v-btn
              elevation="3"
              class="text-capitalize bg-indigo px-5 "
              >Create</v-btn
            >
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
