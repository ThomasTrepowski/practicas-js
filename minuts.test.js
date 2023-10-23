const assert = require('assert');

function calcHf() {
  const hoy = new Date();
  const hor = hoy.getHours();
  const hor2 = hoy.getMinutes();
  const rand = Math.floor(Math.random() * (600 - 300)) + 300;

  let hfin = Math.floor(rand / 60) + hor;
  let mfin = rand % 60 + hor2;

  if (minutosfinal >= 60) {
    hfin += 1;
    mfin -= 60;
  }

  if (hfin >= 24) {
    hfin -= 24;
  }

  return `${hfin}:${mfin}`;
}

const horaFin = calcHf();

const [horas, minutos] = horaFin.split(':').map(Number);

assert.strictEqual(typeof horas, 'number');
assert.strictEqual(typeof minutos, 'number');
assert.ok(horas >= 0 && horas < 24, 'La hora final no esta en el rango válido (0-23 horas)');
assert.ok(minutos >= 0 && minutos < 60, 'Los minutos finales están fuera del rango válido (0-59 minutos)');

console.log("Hora final: ", hfin);
console.log("Prueba pasada exitosamente.");
