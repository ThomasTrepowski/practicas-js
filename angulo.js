num=Math.floor(Math.random ()*360);
vueltas=Math.floor((Math.random ()*(10-5)+5)*360);
numRand=Math.floor( (num * (vueltas)));
angFinal=Math.floor (num * vueltas)%360;
console.log ("Posicion de angulo inicial: "+num);
console.log ("Valor aleatorio Generado en Grados: "+numRand);
console.log ("Angulo Final: "+angFinal);