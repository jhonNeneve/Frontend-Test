<template>
  <v-menu bottom min-width="250px" left rounded offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon x-large v-on="on" class="ma-0">
        <v-avatar color="grey" size="48">
          <img v-if="user" :src="user.avatar" :alt="fullName" />
          <v-icon v-else color="white">mdi-account-circle</v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">
          <v-avatar color="grey" size="48">
            <img v-if="user" :src="user.avatar" :alt="fullName" />
            <v-icon v-else color="white">mdi-account-circle</v-icon>
          </v-avatar>
          <h3 v-if="user" class="mt-3">{{ fullName }}</h3>
          <p class="text-caption mt-1" v-if="user">{{ user.email }}</p>
          <p v-else class="mt-3 px-3" style="width: 250px">
            Realize o logim para ver suas informações.
          </p>
          <div v-if="user">
            <v-divider v-if="isHome" class="mt-3"></v-divider>
            <v-btn
              v-if="isHome"
              text
              large
              block
              depressed
              class="rounded-0"
              @click="goToProfile"
            >
              Perfil
            </v-btn>
            <v-divider></v-divider>
            <v-btn text large block depressed class="rounded-0" @click="logOut">
              Deslogar
            </v-btn>
          </div>
          <div v-else>
            <v-divider class="mt-3"></v-divider>
            <login-dialog />
          </div>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LoginDialog from "@/views/user/components/LoginDialog";

export default {
  name: "UserMenu",
  components: {
    LoginDialog,
  },
  computed: {
    ...mapGetters("user", {
      user: "getUser",
    }),
    fullName() {
      if (!this.user) return "";
      return this.user.name.firstName + " " + this.user.name.lastName;
    },
    isHome() {
      return this.$route.name == "Home";
    },
  },
  methods: {
    ...mapActions("user", {
      setUser: "ActionsSetUser",
    }),
    logOut() {
      this.setUser(null);
      if (!this.isHome) this.$router.push("/");
    },
    goToProfile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style></style>
