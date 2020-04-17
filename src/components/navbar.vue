<template>
  <v-app>
    <v-app-bar max-height="70" color="cyan lighten-1" dark>
      <v-toolbar-title>Игры для умных</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link to="/" class="btn"
        ><v-btn class="mr-3">Home</v-btn></router-link
      >
      <router-link to="/about" class="btn"><v-btn>About</v-btn></router-link>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style lang="scss">
.btn {
  text-decoration: none;
}
</style>
