<template>
  <v-footer padless color="grey lighten-2">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} —
      <strong class="font-pacifico">MyShop</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "MsFooter",
};
</script>
