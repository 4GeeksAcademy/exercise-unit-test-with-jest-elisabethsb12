// Importamos las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para la conversión de Euro a Dólar
test('One euro should be 1.07 dollars', () => {
    let dollars = fromEuroToDollar(1);
    expect(dollars).toBe(1.07);
});

// Prueba para la conversión de Dólar a Yen
test('One dollar should be converted to yen correctly', () => {
    let yen = fromDollarToYen(1);
    expect(yen).toBeCloseTo(156.5 / 1.07);
});

// Prueba para la conversión de Yen a Libras
test('One yen should be converted to pounds correctly', () => {
    let pounds = fromYenToPound(1);
    expect(pounds).toBeCloseTo(0.87 / 156.5);
});