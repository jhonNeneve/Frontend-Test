<template>
  <v-app-bar fixed color="white">
    <!-- Voltar -->
    <v-app-bar-nav-icon @click="goToHome" v-if="!isHome">
      <v-icon slot="default">mdi-arrow-left-thick</v-icon>
    </v-app-bar-nav-icon>
    <!-- Logo -->
    <v-toolbar-title
      :class="{
        'pl-1': !isHome,
      }"
    >
      <logo />
    </v-toolbar-title>
    <v-spacer />
    <!-- Campo e botão de pesquisa -->
    <search v-if="isHome" />
    <v-spacer />
    <!-- Carrinho de compras -->
    <cart v-if="isHome" />
    <!-- Menu do usuário -->
    <user-menu />
  </v-app-bar>
</template>

<script>
import Logo from "./Logo.vue";
import Cart from "./Cart.vue";
import Search from "./Search.vue";
import UserMenu from "./UserMenu.vue";

export default {
  name: "AppBar",
  components: {
    Logo,
    Cart,
    Search,
    UserMenu,
  },
  computed: {
    isHome() {
      return this.$route.name == "Home";
    },
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
