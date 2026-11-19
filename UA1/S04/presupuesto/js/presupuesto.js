//presupuesto.js -Presupuesto 
const precioPersona = 105000;

//nombre y cantidad
const nombre = prompt("¿Cómo se llama?"); // se pide nombre 
const cantidad = Number(prompt("¿Cantidad de personas?"));//se pide en cantidad y se convierte a numero usando Number

//Convierto cantidad # 
console.log("Hola," + nombre + ".");   //muestra el saludo y nombre
console.log("Persona:", cantidad);      //se convierte la cantidad en numero

//Muestra los calculos
 console.log("Total: ¢",precioPersona * Number(cantidad));
 console.log("¿Es grupo(3 o más)?", Number(cantidad) >= 3);
 