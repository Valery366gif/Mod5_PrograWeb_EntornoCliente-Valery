//vuelto.js
const PRECIO_PERSONA = 105000;

const promptPersonas = prompt("¿Cuántas personas se inscriben?");
const promptPago = prompt("¿Con cuánto paga?");

const personas = parseInt(promptPersonas);
const pago = parseFloat(promptPago);

const aPagar = PRECIO_PERSONA * personas;
const vuelto = pago - aPagar;

console.log(`Personas: ${personas}`);
console.log(`A pagar: ${aPagar.toLocaleString("es-CR")}`);
console.log(`Pagó: ${pago.toFixed(2)}`);
console.log(`Vuelto: ${vuelto.toFixed(2)}`);