<template>
  <div class="d-flex align-center" style="width: 600px">
    <v-text-field
      flat
      dense
      filled
      rounded
      hide-details
      class="mr-2"
      placeholder="Pesquisar"
      color="deep-orange lighten-1"
      prepend-inner-icon="mdi-magnify"
      background-color="grey lighten-2"
      @keyup.enter="setSearch(search)"
      v-model="search"
    ></v-text-field>
    <v-btn
      dark
      rounded
      depressed
      class="ma-0"
      style="background: linear-gradient(to right, #ff5722 0%, #ff8a50 100%)"
      @click="setSearch(search)"
    >
      Pesquisar
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Search",
  data: () => ({
    search: "",
  }),
  methods: {
    ...mapActions("home", {
      setSearch: "ActionsSetSearch",
    }),
  },
};
</script>

<style></style>
