const bitcoin = async (fn) => {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=jpy&days=1");
    const data = await res.json();
    const elementId = ("btc");
    fn(data,elementId);
}
const ethereum = async (fn) => {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=jpy&days=1");
    const data = await res.json();
    const elementId = ("eth");
    fn(data,elementId);
}

const dom = (data,elementId) => {
    const lists = document.getElementById(elementId);
    const createLists = document.createElement("li");
    const value = parseInt(data.prices[0][1]);
    createLists.innerText = (`${value.toLocaleString()}` + "円");
    lists.appendChild(createLists);
}

bitcoin(dom)
ethereum(dom)



