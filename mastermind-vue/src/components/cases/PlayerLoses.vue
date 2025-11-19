<script setup>

import Card from "../common/Card.vue";
import Button from "../common/Button.vue";
import Container from "../common/Container.vue";
import router from "../../router/index.js";

function playAgain() {
  router.push("/");
}
</script>

<template>
  <Container>
    <Card title="You Lost 😢">
      <p class="mb-3">You ran out of moves or lives!</p>
      <Button label="Play again"
              color="warning"
              @click="playAgain"/>
    </Card>
  </Container>
</template>

<style scoped>

</style>