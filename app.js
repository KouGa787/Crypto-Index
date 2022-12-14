// BTC price.
( async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=jpy&days=1");
    const data = await res.json();
    let value = data.prices[0][1];
    btc.innerText = (`${value.toLocaleString()}` + "円");
})();

// ETH price.
( async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=jpy&days=1");
    const data = await res.json();
    let value = data.prices[0][1];
    eth.innerHTML = (`${value.toLocaleString()}` + "円");
})();