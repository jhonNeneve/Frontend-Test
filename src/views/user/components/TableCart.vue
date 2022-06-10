<template>
  <v-card>
    <v-card-title>
      <v-icon class="mr-2">mdi-cart</v-icon>
      Meu carrinho
    </v-card-title>
    <v-data-table :headers="headers" :items-per-page="10" :items="getCartWithData">
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.price | formatPrice }}</td>
          <td>{{ item.description }}</td>
          <td class="text-center">
            <v-chip>{{ item.quantity }}</v-chip>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TabelaCart",
  data: () => ({
    headers: [
      { text: "Produto", sortable: false },
      { text: "Preço", sortable: false },
      { text: "Descrição", sortable: false },
      { text: "Quantidade", sortable: false, align: "end" },
    ],
  }),
  computed: {
    ...mapGetters("home", {
      cart: "getCart",
      products: "getProducts",
    }),
    getCartWithData() {
      let cartWithData = [...this.cart];
      cartWithData.forEach((item) => {
        let locateItem = this.products.find((p) => p.id == item.id);
        item = Object.assign(item, locateItem);
      });
      return cartWithData;
    },
  },
};
</script>

<style></style>
