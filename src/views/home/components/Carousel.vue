<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      :key="recommended.id"
      :src="recommended.defaultImage"
      v-for="recommended in recommendeds"
    >
      <v-sheet color="grey lighten-2" height="100%">
        <div class="d-flex align-center justify-space-between" style="height: 100%">
          <div class="ma-auto text-start" style="width: 600px">
            <h1 class="deep-orange--text text--darken-3">
              {{ recommended.name }}
            </h1>
            <p>
              {{ recommended.description }}
            </p>
            <h2 style="display: flex" class="align-center">
              {{ recommended.price | formatPrice }}
              <v-chip
                dark
                color="deep-orange lighten-1"
                class="ml-2"
                v-if="recommended.discount != 0"
              >
                {{ recommended.discount }}% de desconto
              </v-chip>
            </h2>
          </div>
          <v-img max-width="532" :src="recommended.defaultImage">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
        <!-- <v-row class="fill-height ma-0" align="center" justify="center">
        </v-row> -->
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Carousel",
  computed: {
    ...mapGetters("home", {
      recommendeds: "getRecommendeds",
    }),
  },
};
</script>

<style></style>
