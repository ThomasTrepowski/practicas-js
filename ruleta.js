function rndInt(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) ) + min)%37;
}
function gtInt(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) ) + min);
}
cont=0;
while (cont<10){ 
    num=rndInt(185,370);
    valrnd=gtInt(400,700);
    console.log("Numero de la ruleta= "+num);
    console.log("Valor aleatorio= "+valrnd);
    console.log ("----------------------")
    cont+=1;
}