const priceElement = document.getElementById('bitcoin-price');

async function fetchBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const bitcoinPrice = data.bitcoin.usd;
        priceElement.textContent = `Price: $${bitcoinPrice}`;
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
    }
}

fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 60000);