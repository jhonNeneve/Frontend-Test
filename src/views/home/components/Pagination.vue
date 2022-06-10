<template>
  <v-pagination
    color="deep-orange lighten-1"
    :total-visible="7"
    :length="totalPages"
    v-model="page"
  ></v-pagination>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Pagination",
  data: () => ({
    page: 1,
  }),
  computed: {
    ...mapGetters("home", {
      search: "getSearch",
      products: "getProducts",
    }),
    totalPages() {
      let total = this.products.filter(
        (p) => p.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      ).length;
      let pages = total / 20;
      if (!Number.isInteger(pages)) pages = parseInt(pages) + 1;
      return pages;
    },
  },
  watch: {
    page() {
      this.$emit("page-changed", this.page);
    },
  },
};
</script>

<style></style>
