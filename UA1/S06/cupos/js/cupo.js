// cupos.js - Estado de los cupos y nivel en Casa Tomillo
const nivel = "Inicial";
const cupos = 6;

// 1. Condicionales para el estado de cupos
if (cupos === 0) {
    console.error("Taller lleno");
} else if (cupos <= 2) {
    console.warn("¡Últimos cupos!");
} else {
    console.log("Hay cupos disponibles");
}

// 2. Operador ternario para el mensaje de cantidad
console.log(cupos === 1 ? "Queda 1 cupo" : `Quedan ${cupos} cupos`);

// 3. Switch para el nivel del curso
switch (nivel) {
    case "Inicial":
        console.log("No necesita experiencia");
        break;
    case "Intermedio":
        console.log("Requiere el nivel inicial");
        break;
    default:
        console.log("Consulte con la escuela");
}