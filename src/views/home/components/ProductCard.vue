<template>
  <v-card outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4 deep-orange--text font-weight-bold">
          {{ product.price | formatPrice }}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ product.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ product.description }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80" color="grey">
        <v-img :src="product.defaultImage" :alt="product.name">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-spacer />
      <v-btn outlined rounded text @click="addItemToCart(product)">
        <v-icon color="grey darken-1">mdi-plus</v-icon>
        Adicionar ao carrinho
      </v-btn>
      <v-menu left bottom v-if="user && user.role == 'ADMIN'">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon class="ml-3" v-on="on" v-bind="attrs">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="edit(product)">
            <v-list-item-title>Editar</v-list-item-title>
          </v-list-item>
          <v-list-item @click="exclude(product)">
            <v-list-item-title>Excluir</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-actions>
    <!-- Dialog para confirmar exclusão -->
    <exclude-product-dialog :dialog.sync="dialog" :item="item" />
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ExcludeProductDialog from "./ExcludeProductDialog";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      require: true,
    },
  },
  components: {
    ExcludeProductDialog,
  },
  data: () => ({
    dialog: false,
    item: null,
  }),
  computed: {
    ...mapGetters("home", {
      cart: "getCart",
    }),
    ...mapGetters("user", {
      user: "getUser",
    }),
  },
  methods: {
    ...mapActions("home", {
      setCart: "ActionsSetCart",
    }),
    addItemToCart(item) {
      let cart = [...this.cart];
      let index = cart.findIndex((c) => c.id == item.id);
      if (index !== -1) {
        cart[index].quantity += 1;
      } else {
        cart.push({
          id: item.id,
          quantity: 1,
        });
      }
      this.setCart(cart);
    },
    edit(item) {
      this.$emit("edit", item);
    },
    exclude(item) {
      this.item = item;
      this.dialog = true;
    },
  },
};
</script>

<style></style>
