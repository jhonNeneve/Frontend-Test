<template>
  <!-- App -->
  <v-app>
    <v-main>
      <!-- Barra superior -->
      <app-bar />
      <!-- Conteudo da página -->
      <v-container fluid class="grey lighten-5 justify-start align-start ms-container">
        <router-view />
      </v-container>
      <!-- Footer -->
      <ms-footer />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";
import MsFooter from "./components/MsFooter";

export default {
  name: "App",
  components: {
    AppBar,
    MsFooter,
  },
};
</script>

<style>
.ms-container {
  margin-top: 52px;
  min-height: calc(100vh - 102px);
}
.font-pacifico {
  font-family: "Pacifico", cursive;
}
</style>
