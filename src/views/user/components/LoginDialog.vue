<template>
  <v-dialog width="400" v-model="dialog" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        large
        block
        depressed
        class="rounded-0"
        v-on="on"
        v-bind="attrs"
        @click="dialog = true"
      >
        Logar
      </v-btn>
    </template>
    <v-card :loading="loading">
      <v-card-title class="text-h5">Login</v-card-title>
      <v-alert text dense type="error" class="rounded-0" v-show="error">
        E-mail ou senha incorreta!
      </v-alert>
      <v-card-text class="mt-3">
        <v-form ref="form" lazy-validation>
          <v-row>
            <v-col cols="12" class="pb-0">
              <v-text-field
                outlined
                required
                persistent-hint
                label="E-mail"
                :hint="
                  'Para teste: (Admin): ' +
                  users[0].email +
                  ' | (Customer): ' +
                  users[1].email
                "
                :rules="[
                  (v) => !!v || 'O e-mail é obrigatório',
                  (v) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
                ]"
                v-model="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-text-field
                outlined
                required
                persistent-hint
                label="Senha"
                type="password"
                hint="Para teste: 123"
                :rules="[(v) => !!v || 'A senhas é obrigatória']"
                v-model="password"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          text
          color="deep-orange lighten-1"
          :disabled="loading"
          @click="dialog = false"
        >
          Cancelar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          dark
          depressed
          color="deep-orange lighten-1"
          :loading="loading"
          :disabled="loading"
          @click="logar"
        >
          Logar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LoginDialog",
  data: () => ({
    error: false,
    dialog: false,
    loading: false,
    email: "",
    password: "",
  }),
  computed: {
    ...mapGetters("home", {
      users: "getUsers",
    }),
  },
  watch: {
    dialog() {
      if (!this.dialog) {
        this.$refs.form.reset();
        this.error = false;
      }
    },
  },
  methods: {
    ...mapActions("user", {
      setUser: "ActionsSetUser",
    }),
    async logar() {
      if (!this.$refs.form.validate()) return;
      this.loading = true;
      await new Promise((resolve) => setTimeout(resolve, 2000));
      let user = this.users.find(
        (u) => u.email == this.email && u.password == this.password
      );
      if (user) {
        this.error = false;
        this.setUser(user);
      } else {
        this.error = true;
      }
      this.loading = false;
    },
  },
};
</script>

<style></style>
