document.addEventListener("DOMContentLoaded", function() {
    const fromCurrency = document.getElementById("from-currency");
    const fromFlag = document.getElementById("from-flag");
    const toCurrency = document.getElementById("to-currency");
    const toFlag = document.getElementById("to-flag");

    fromCurrency.addEventListener("change", function() {
        const selectedCurrency = fromCurrency.value.slice(0, 2);
        const flagURL = `https://flagcdn.com/48x36/${selectedCurrency.toLowerCase()}.png`;
        fromFlag.src = flagURL;
    });

    toCurrency.addEventListener("change", function() {
        const selectedCurrency = toCurrency.value.slice(0, 2);;
        const flagURL = `https://flagcdn.com/48x36/${selectedCurrency.toLowerCase()}.png`;
        toFlag.src = flagURL;
    });
});
