<template>
  <v-dialog width="500" @keydown.esc="close()" @click:outside="close()" v-model="dialog">
    <v-sheet
      dark
      color="blue-grey darken-3"
      class="px-7 pt-7 pb-4 mx-auto text-center d-inline-block"
    >
      <div class="grey--text text--lighten-1 text-body-2 mb-4">
        Tem certeza que quer excluir esse produto?
      </div>
      <v-btn plain class="ma-1" color="grey" :disabled="loading" @click="close()">
        Cancel
      </v-btn>
      <v-btn :loading="loading" class="ma-1" color="error" plain @click="exclude">
        Excluir
      </v-btn>
    </v-sheet>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ExcludeProductDialog",
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    loading: false,
  }),
  computed: {
    ...mapGetters("home", {
      products: "getProducts",
    }),
  },
  methods: {
    ...mapActions("home", {
      setProducts: "ActionsSetProducts",
    }),
    async exclude() {
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      let products = [...this.products];
      let index = products.findIndex((p) => p.id == this.item.id);
      products.splice(index, 1);
      this.setProducts(products);
      this.$emit("update:dialog", false);
      this.loading = false;
    },
    close() {
      if (this.loading) return;
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style></style>
