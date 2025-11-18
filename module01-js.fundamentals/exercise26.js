fetch("https://api.binance.com/api/v3/ticker/price")
    .then(res => res.json())
    .then(tickers => tickers.forEach(ticker => console.log(`${ticker.symbol}: ${ticker.price}`)))
