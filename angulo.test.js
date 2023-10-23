const assert = require('assert');

function generarAnguloF() {
  const angulo = Math.floor(Math.random() * (360 - 0)) + 0;
  const vuelta = Math.floor(Math.random() * (11 - 5)) + 5;
  const angulo2 = Math.floor(Math.random() * (360 - 0)) + 0;

  const numero = angulo2 * vuelta + angulo;
  const suma = numero % 360;

  return suma;
}

const angulof = generarAnguloF();

console.log("Angulo final: ", angulof);
assert.ok(angulof >= 0 && angulof < 360, 'fuera del rango');
console.log("Prueba exitosa");
