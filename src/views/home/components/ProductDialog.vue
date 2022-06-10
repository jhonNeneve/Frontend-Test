<template>
  <v-dialog persistent v-model="dialog" width="500">
    <v-card>
      <v-card-title class="text-h5">{{ title }}</v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-row class="mt-3">
            <v-col cols="12" class="pb-0">
              <v-text-field
                outlined
                label="Nome"
                :rules="[(v) => !!v || 'O nome é obrigatório']"
                v-model="name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-text-field
                outlined
                label="Descrição"
                v-model="description"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="7" class="pb-0">
              <v-text-field
                outlined
                prefix="R$"
                type="number"
                label="Preço"
                :rules="[(v) => !!v || 'O preço é obrigatória']"
                v-model="price"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="5" class="pb-0">
              <v-text-field
                outlined
                suffix="%"
                type="number"
                label="Desconto"
                v-model="discount"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-text-field
                label="URL de imagem"
                outlined
                persistent-hint
                :hint="
                  'Para teste: ' +
                  (products && products[0] && products[0].defaultImage
                    ? products[0].defaultImage
                    : '')
                "
                :rules="[(v) => !!v || 'A url da imagem é obrigatória']"
                v-model="url"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="deep-orange lighten-1" text @click="$emit('update:dialog', false)">
          Cancelar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="deep-orange lighten-1" depressed dark @click="salvar">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductDialog",
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    url: "",
    name: "",
    price: "",
    discount: "",
    description: "",
  }),
  computed: {
    ...mapGetters("home", {
      products: "getProducts",
    }),
    title() {
      return this.product ? "Edição de produto" : "Novo produto";
    },
    newId() {
      return this.products.length + 1;
    },
  },
  watch: {
    dialog() {
      if (this.dialog) {
        this.newId;
        if (this.product) {
          this.url = this.product.defaultImage;
          this.name = this.product.name;
          this.price = this.product.price;
          this.discount = this.product.discount;
          this.description = this.product.description;
        }
      } else this.$refs.form.reset();
      if (!this.dialog) this.$refs.form.reset();
    },
  },
  methods: {
    ...mapActions("home", {
      setProducts: "ActionsSetProducts",
    }),
    salvar() {
      if (!this.$refs.form.validate()) return;
      let products = [...this.products];
      if (this.product) {
        let index = products.findIndex((p) => p.id == this.product.id);
        products[index] = {
          defaultImage: this.url,
          description: this.description,
          discount: parseFloat(this.discount) || 0,
          id: this.product.id,
          images: this.product.images,
          name: this.name,
          price: parseFloat(this.price),
        };
      } else {
        products.push({
          defaultImage: this.url,
          description: this.description,
          discount: parseFloat(this.discount) || 0,
          id: this.newId,
          images: [],
          name: this.name,
          price: parseFloat(this.price),
        });
      }
      this.setProducts(products);
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style></style>
