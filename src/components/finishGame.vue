<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-card width="400" color="purple darken-3" dark>
        <v-card-title> Поздравляю,ты прошел игру! </v-card-title>
        <v-card-subtitle>Finish</v-card-subtitle>
        <v-col cols="12" sm="12">
          <v-card-text>
            Эта игра была создана для моей практики,как веб-разработчика и в
            дальнейшим будет развиваться.Спасибо,что уделили моей игре пару
            минут своей жизни, мне очень приятно,цмок)
          </v-card-text>
          <router-link to="/" class="btn"
            ><v-btn class="mr-3">Home</v-btn></router-link
          >
          <router-link to="/about" class="btn"
            ><v-btn>About</v-btn></router-link
          >
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "finishGame"
};
</script>

<style scoped></style>
