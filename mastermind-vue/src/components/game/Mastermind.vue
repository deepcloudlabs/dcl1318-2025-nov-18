<script setup>
// Application State, View Model, Model  -- declarative --> View
//                                      <-- declarative --

import {computed, onMounted, onUnmounted, reactive} from "vue";
import Card from "../common/Card.vue";
import Badge from "../common/Badge.vue";
import InputText from "../common/InputText.vue";
import Button from "../common/Button.vue";
import Row from "../common/Row.vue";
import Column from "../common/Column.vue";
import ProgressBar from "../common/ProgressBar.vue";
import createSecret, {evaluateMove} from "../../utils/mastermind-utils.js";
import Table from "../common/Table.vue";
import Container from "../common/Container.vue";
import router from "../../router/index.js";
import {useGameStore} from "../../stores/gameStore.js";

//region view constants
const HistoryTableColumnNames = [
  "Guess",
  "Perfect Match",
  "Partial Match",
  "Evaluation"
];

const MoveFields = [
  "guess",
  "perfectMatch",
  "partialMatch",
  "message"
];
//endregion

const game = useGameStore();

let timerId = null;

//region life-cycle methods
onMounted(() => {
  game.loadStateFromLocalStorage();
  timerId = setInterval(() => {
    routeGame(game.countDown());
  }, 1_000);
});

onUnmounted(() => {
  if (timerId) {
    clearInterval(timerId);
  }
});
//endregion



function routeGame(gameState) {
  switch (gameState) {
    case "continues":
      break;
    case "wins":
      router.push("/wins");
      break;
    case "loses":
      router.push({name: 'loses'});
      break;
    default:
      throw new Error("Unknown game state");
  }
}

function play() {
  routeGame(game.play());
}

</script>

<template>
  <Container>
    <Row>
      <Column>
        <Card title="Game Console">
          <Badge color="primary" label="Game Level" :value="game.level"></Badge>
          <Badge color="success" label="Lives" :value="game.lives"></Badge>
          <Badge color="warning" label="Tries" :value="game.tries"></Badge>
          <ProgressBar :value="game.triesLeft" :max-value="game.max_moves"/>
          <Badge color="danger" label="Counter" :value="game.counter"></Badge>
          <ProgressBar :value="game.counter"
                       :maxValue="game.max_counter"/>
          <InputText id="guess"
                     v-model="game.guess"
                     label="Guess"
                     placeholder="Enter your guess">
            <Button @click="play" label="Play"/>
          </InputText>
        </Card>
      </Column>
      <Column>
        <Card title="Game History">
          <Table :items="game.moves"
                 table-color="danger"
                 :columns="HistoryTableColumnNames"
                 :fields="MoveFields"/>
        </Card>
      </Column>
    </Row>
  </Container>
</template>

<style scoped>

</style>