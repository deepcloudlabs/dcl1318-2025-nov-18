<script setup>

import Card from "./common/Card.vue";
import {onMounted, reactive} from "vue";
import SelectBox from "./common/SelectBox.vue";

const market = reactive({
  symbols: [],
  symbol: "BTCUSDT",
  windowSize: 50
});

const WINDOW_SIZES = [10, 25, 50, 100];
const BINANCE_REST_API_URL = "https://api.binance.com/api/v3/ticker/price";

function fetchSymbols() {
  fetch(BINANCE_REST_API_URL)
      .then(res => res.json())
      .then(tickers => {
        tickers.sort((t1, t2) => t1.symbol.localeCompare(t2.symbol));
        market.symbols = tickers.map(ticker => ticker["symbol"]);
        // market.symbols.sort();
      })
}

onMounted(fetchSymbols);

</script>

<template>
  <Card title="Market">
    <SelectBox id="symbols"
               v-model:value="market.symbol"
               :options="market.symbols"
               label="Market Symbol"/>
    <SelectBox id="windowSizes"
               v-model:value="market.windowSize"
               :options="WINDOW_SIZES"
               label="Window Size"/>
  </Card>
</template>

<style scoped>

</style>