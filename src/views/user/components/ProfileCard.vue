<template>
  <v-card tile>
    <v-img
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    ></v-img>
    <v-row class="mt-n8">
      <v-col cols="12" class="pt-0">
        <v-list-item>
          <v-list-item-avatar color="grey" size="100">
            <img :src="user.avatar" :alt="fullName" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title" style="margin-top: 20px">
              {{ fullName }}
            </v-list-item-title>
            <v-list-item-subtitle>Descrição do usuário</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <!-- Telefone -->
        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="deep-orange lighten-1"> mdi-phone </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ user.phone }}</v-list-item-title>
              <v-list-item-subtitle>Celular</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <!-- Email -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="deep-orange lighten-1"> mdi-email </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ user.email }}</v-list-item-title>
              <v-list-item-subtitle>Pessoal</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <!-- Endereço -->
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="deep-orange lighten-1"> mdi-map-marker </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                >{{ user.address.street }}, {{ user.address.city }}</v-list-item-title
              >
              <v-list-item-subtitle
                >{{ user.address.country }}, {{ user.address.zip }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProfileCard",
  computed: {
    ...mapGetters("user", {
      user: "getUser",
    }),
    fullName() {
      if (!this.user) return "";
      return this.user.name.firstName + " " + this.user.name.lastName;
    },
  },
};
</script>

<style></style>
