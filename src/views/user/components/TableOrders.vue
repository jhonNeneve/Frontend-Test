<template>
  <v-card>
    <v-card-title>
      <v-icon class="mr-2">mdi-text-box</v-icon>
      Minhas ordens
    </v-card-title>
    <v-data-table :headers="headers" :items-per-page="10" :items="getOrdersWithData">
      <template v-slot:item="{ item }">
        <tr>
          <td class="text-center">{{ item.id_order }}</td>
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
  name: "",
  data: () => ({
    headers: [
      { text: "Ordem", align: "center", sortable: false },
      { text: "Produto", sortable: false },
      { text: "Preço", sortable: false },
      { text: "Descrição", sortable: false },
      { text: "Quantidade", align: "center", sortable: false },
    ],
  }),
  computed: {
    ...mapGetters("home", {
      products: "getProducts",
    }),
    ...mapGetters("user", {
      user: "getUser",
    }),
    getOrdersWithData() {
      if (!this.user) return [];
      var newList = [];
      this.user.orders.forEach((order) => {
        order.products.forEach((item) => {
          let locateItem = this.products.find((p) => p.id == item.id);
          newList.push(Object.assign(item, locateItem, { id_order: order.id }));
        });
      });
      return newList;
    },
  },
};
</script>

<style></style>
