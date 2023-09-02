document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.getElementById("convert");
    const amountInput = document.getElementById("amount");
    const currencySelect = document.getElementById("currency");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", () => {
        const amount = parseFloat(amountInput.value);
        const selectedCurrency = currencySelect.value;

        if (isNaN(amount) || amount <= 0) {
            alert("Por favor, ingrese una cantidad válida de pesos chilenos.");
            return;
        }

        fetch("datos.json")
            .then(response => response.json())
            .then(data => {
                const conversionRate = data[selectedCurrency].valor;
                const convertedAmount = (amount / conversionRate).toFixed(2);

                resultDiv.textContent = `El equivalente en ${selectedCurrency.toUpperCase()} es: ${convertedAmount}`;
            })
            .catch(error => {
                resultDiv.textContent = "Ha ocurrido un error al realizar la conversión.";
                console.error(error);
            });
    });
});

// Lo siento profesor, tuve problemas con el gráfico y no lo pude desarrollar me costó un poco entenderlo y por falta de tiempo la verdad no lo terminé.