const btcusdPriceElement = document.getElementById('btc-price-usd');
const ethusdPriceElement = document.getElementById('eth-price-usd');
const btcaudPriceElement = document.getElementById('btc-price-aud');
const ethaudPriceElement = document.getElementById('eth-price-aud');

async function fetchBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,aud&include_24hr_change=true');
        const data = await response.json();
        const bitcoinPrice = data;
        btcusdPriceElement.textContent = `Price: $${bitcoinPrice}`;
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
    }
}

fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 60000);