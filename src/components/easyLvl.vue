<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-card width="400" color="purple darken-3" dark>
        <v-card-title>{{ oneValue }} + {{ twoValue }} = ?</v-card-title>
        <v-card-subtitle>Easy</v-card-subtitle>
        <v-col cols="12" sm="6">
          <v-text-field label="Ваш ответ " single-line v-model="peopleValue">
          </v-text-field>
          <v-btn @click="Answer">готово</v-btn>
          <v-btn class="mx-2" fab dark @click="levelUp">
            <v-icon large color="white">mdi-arrow-up-bold-box-outline</v-icon>
          </v-btn>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "easyLvl",
  data() {
    return {
      peopleValue: "",
      oneValue: this.firstValue(0, 20),
      twoValue: this.firstValue(0, 20)
    };
  },
  methods: {
    levelUp: function() {
      this.$router.push("/middleLevel");
    },
    Answer: function() {
      if (this.oneValue + this.twoValue == this.peopleValue) {
        this.peopleValue = "";
        this.oneValue = this.firstValue(0, 20);
        this.twoValue = this.firstValue(0, 20);
      } else {
        alert("ты ебалан!");
        this.peopleValue = "";
      }
    },
    firstValue: function(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
};
</script>

<style scoped></style>
