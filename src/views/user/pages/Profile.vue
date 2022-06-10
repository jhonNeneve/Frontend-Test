<template>
  <v-row class="mt-3" v-if="user">
    <!-- Informação do usuário -->
    <v-col cols="12" md="4">
      <profile-card />
    </v-col>
    <v-col cols="12" md="8">
      <v-row>
        <!-- Tabela do carrinho -->
        <v-col cols="12">
          <table-cart />
        </v-col>
        <!-- Tabela de ordens -->
        <v-col cols="12">
          <table-orders />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import TableCart from "../components/TableCart";
import ProfileCard from "../components/ProfileCard";
import TableOrders from "../components/TableOrders";

export default {
  name: "Profile",
  components: {
    TableCart,
    ProfileCard,
    TableOrders,
  },
  beforeMount() {
    if (!this.user) this.$router.push("/");
  },
  computed: {
    ...mapGetters("user", {
      user: "getUser",
    }),
  },
};
</script>

<style></style>
