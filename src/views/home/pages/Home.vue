<template>
  <v-row>
    <!-- Carrossel -->
    <v-col cols="12" class="px-0" v-if="recommendeds.length">
      <carousel />
    </v-col>
    <!-- Sem produtos -->
    <v-col
      cols="12"
      class="d-flex justify-center align-center"
      v-if="!filteredProducts.length"
    >
      <div class="mt-10 text--secondary">
        <v-icon x-large style="width: 100%">mdi-magnify</v-icon>
        <h3>Nenhum produto encomtrado.</h3>
      </div>
    </v-col>
    <!-- Com produtos -->
    <v-col
      v-else
      lg="3"
      md="4"
      sm="6"
      cols="12"
      :key="product.id"
      v-for="product in filteredProducts"
    >
      <product-card :product="product" @edit="edit" />
    </v-col>
    <!-- Paginação -->
    <v-col
      cols="12"
      class="d-flex justify-center align-center"
      v-if="filteredProducts.length"
    >
      <pagination @page-changed="page = $event" />
    </v-col>
    <!-- Dialog produto -->
    <v-fab-transition>
      <v-btn
        color="deep-orange lighten-1"
        fab
        dark
        right
        fixed
        bottom
        @click="add"
        v-if="user && user.role == 'ADMIN'"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
    <product-dialog :dialog.sync="dialog" :product="product" />
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Carousel from "../components/Carousel.vue";
import Pagination from "../components/Pagination.vue";
import ProductCard from "../components/ProductCard.vue";
import ProductDialog from "../components/ProductDialog.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Pagination,
    ProductCard,
    ProductDialog,
  },
  data: () => ({
    dialog: false,
    page: 1,
    product: null,
  }),
  created() {
    this.getData();
  },
  computed: {
    ...mapGetters("home", {
      search: "getSearch",
      products: "getProducts",
      recommendeds: "getRecommendeds",
    }),
    ...mapGetters("user", {
      user: "getUser",
    }),
    filteredProducts() {
      return this.products
        .filter((p) => p.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
        .slice((this.page - 1) * 20, this.page * 20);
    },
  },
  methods: {
    ...mapActions("home", {
      getData: "ActionsGetData",
    }),
    add() {
      this.product = null;
      this.dialog = true;
    },
    edit(product) {
      this.product = product;
      this.dialog = true;
    },
  },
};
</script>

<style></style>
