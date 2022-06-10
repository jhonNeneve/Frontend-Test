<template>
  <v-menu left offset-y :close-on-content-click="false" :nudge-width="200">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-on="on" v-bind="attrs" class="mr-3">
        <v-badge
          overlap
          color="deep-orange lighten-1"
          :content="totalItems"
          v-if="totalItems"
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
        <v-icon v-else>mdi-cart</v-icon>
      </v-btn>
    </template>

    <v-card width="300">
      <v-subheader>
        Meu carrinho
        <v-spacer />
        <v-btn v-if="totalItems" small text outlined class="mr-n2">
          Finalizar compra
        </v-btn>
      </v-subheader>
      <v-divider></v-divider>
      <v-card-text style="height: 300px; overflow-y: auto" class="pa-0">
        <v-list subheader two-line class="pb-0" v-if="cart.length">
          <template v-for="item in getCartWithData">
            <v-list-item :key="item.id">
              <v-list-item-avatar>
                <img v-if="item.defaultImage" :src="item.defaultImage" :alt="item.name" />
                <v-icon v-else class="grey lighten-1" dark> mdi-folder </v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>

                <v-list-item-subtitle>{{
                  item.price | formatPrice
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action style="display: contents">
                <v-btn icon x-small @click="remove(item)">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <div style="border: 1px solid #bdbdbd" class="mx-1 px-1 rounded">
                  {{ item.quantity }}
                </div>
                <v-btn icon x-small @click="add(item)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-divider :key="'divider-' + item.id"></v-divider>
          </template>
        </v-list>
        <p v-else class="mt-5 d-flex justify-center">Não hà itens no carrinho.</p>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="px-4">
        Total:
        <v-spacer />
        <b>{{ totalPrice | formatPrice }}</b>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters("home", {
      cart: "getCart",
      products: "getProducts",
    }),
    getCartWithData() {
      let cartWithData = [...this.cart];
      cartWithData.forEach((item) => {
        let locateItem = this.products.find((p) => p.id == item.id);
        if (locateItem) item = Object.assign(item, locateItem);
        else this.remove(item, true);
      });
      return cartWithData;
    },
    totalPrice() {
      if (this.getCartWithData.length) {
        return this.getCartWithData
          .map((item) => item.price * item.quantity)
          .reduce((soma, value) => soma + value);
      }
      return 0;
    },
    totalItems() {
      if (this.cart.length) {
        return this.cart
          .map((item) => item.quantity)
          .reduce((soma, quantity) => soma + quantity);
      }
      return 0;
    },
  },
  methods: {
    ...mapActions("home", {
      setCart: "ActionsSetCart",
    }),
    add(item) {
      item.quantity += 1;
    },
    remove(item, all = false) {
      if (item.quantity > 1 && !all) {
        item.quantity -= 1;
      } else {
        let cart = [...this.cart];
        let index = cart.findIndex((c) => (c.id = item.id));
        cart.splice(index, 1);
        this.setCart(cart);
      }
    },
  },
};
</script>

<style></style>
