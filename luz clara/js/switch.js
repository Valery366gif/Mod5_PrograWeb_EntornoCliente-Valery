//swtch.js - elegir entre varios casos
const dia = "sabado";
switch (dia) {
  case "sabado":
    console.log("Tarifa de fin de semana");
    break;

  case "domingo":
    console.log("estudio cerrado");
    break;

  default:
    console.log("Tarifa normal");
}