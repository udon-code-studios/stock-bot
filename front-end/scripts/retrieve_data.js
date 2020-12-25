// extract symbol and date from search parameters
//
const urlParams = new URLSearchParams(window.location.search);
let symbol = urlParams.get('symbol');
let date = urlParams.get('date');

// default to symbol=NVDA date=today if empty
//
if (symbol === '' || symbol == null) {
    symbol = 'NVDA';
}
if (date === '' || date == null) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    date = `${yyyy}-${mm}-${dd}`;
}

// print symbol and date to log element
//
const log = document.getElementById('log');
log.textContent = `Symbol: ${symbol} Date: ${date}`;