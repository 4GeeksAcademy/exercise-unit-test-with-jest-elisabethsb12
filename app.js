// Objeto con valores de conversión
let oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07, // Dólar estadounidense
    "GBP": 0.87  // Libra esterlina
};

// Función para sumar dos números
const sum = (a, b) => a + b;

// Función para convertir de euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs["USD"];
};

// Función para convertir de dólares a yenes
const fromDollarToYen = function(valueInDollars) {
    let amountInEuros = valueInDollars / oneEuroIs["USD"];
    return amountInEuros * oneEuroIs["JPY"];
};

// Función para convertir de yenes a libras
const fromYenToPound = function(valueInYen) {
    let amountInEuros = valueInYen / oneEuroIs["JPY"];
    return amountInEuros * oneEuroIs["GBP"];
};

// Exportar funciones para pruebas
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };