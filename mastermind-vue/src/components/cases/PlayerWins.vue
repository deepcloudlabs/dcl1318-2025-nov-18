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
    <Card title="You Win 🎉">
      <p class="mb-3">Congratulations, you win the game!</p>
      <Button label="Play again"
              color="success"
              @click="playAgain"/>
    </Card>
  </Container>
</template>

<style scoped>

</style>