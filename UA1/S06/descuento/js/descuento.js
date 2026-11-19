// descuento.js
const monto = 120000; // una compra grande
let descuento = 0;

if (monto >= 100000) {
    descuento = 10; // compra grande
} else if (monto >= 50000) {
    descuento = 5;  // compra mediana
}

console.log(`Descuento: ${descuento}%`); // ahora muestra 10%