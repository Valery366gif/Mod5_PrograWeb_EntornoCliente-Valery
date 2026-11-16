// casa-tomillo/js/pago.js
const nombreBruto = "  panadería: masa madre  ";
const nombreLimpio = nombreBruto.trim().toUpperCase();

const fechaInicio = new Date(2026, 10, 21); // Noviembre es el mes 10
const opcionesFecha = { dateStyle: "full" };
const fechaFormateada = fechaInicio.toLocaleDateString("es-CR", opcionesFecha);

const total = 105000;
const cantidadCuotas = 4;
const cuota = total / cantidadCuotas;

const colones = new Intl.NumberFormat("es-CR", {
  style: "currency",
  currency: "CRC"
});

console.log(`Taller: ${nombreLimpio}`);
console.log(`Inicia: ${fechaFormateada}`);
console.log(`Total: ${colones.format(total)}`);
console.log(`${cantidadCuotas} cuotas de ${colones.format(cuota)}`);
console.log(`¿Cuota exacta? ${Number.isInteger(cuota)}`);

const cuotas3 = 3;
const calculo3 = Math.ceil(total / cuotas3);
console.log(`Con 3 cuotas: ${calculo3} cada una`);