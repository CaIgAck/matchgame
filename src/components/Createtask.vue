<template>
  <v-row justify="center" align-content="center" class="">
    <v-card hover dark>
      <v-card-title>Уровень сложности</v-card-title>
      <v-btn
        color="primary"
        fab
        large
        dark
        class="ma-3 "
        @click="submitEasyLevel"
      >
        E
      </v-btn>
      <v-btn
        color="primary"
        fab
        large
        dark
        class="ma-3"
        @click="submitMiddleLevel"
      >
        M
      </v-btn>
      <v-btn
        color="primary"
        fab
        large
        dark
        class="ma-3"
        @click="submitHardLevel"
      >
        H
      </v-btn>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "Createtask",
  methods: {
    submitEasyLevel: function() {
      this.$router.push("/easyLevel");
    },
    submitMiddleLevel: function() {
      this.$router.push("/middleLevel");
    },
    submitHardLevel: function() {
      this.$router.push("/hardLevel");
    }
  }
};
</script>

<style lang="scss"></style>
