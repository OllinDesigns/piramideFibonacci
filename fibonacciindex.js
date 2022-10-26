/* SERIE FIBONACCI, FUNCIONA
https://www.youtube.com/watch?v=rdYuQFLmX0o
 */
let primerNumero = 1;
let segundoNumero = 1;
let miArray = [primerNumero, segundoNumero];

for(let i = 0; i <= 50; i++){

    let nuevoNumero = primerNumero + segundoNumero;
    miArray.push(nuevoNumero);
    primerNumero = segundoNumero;
    segundoNumero = nuevoNumero;
}

/* console.log(miArray); */

/* ahora introducimos este bucle for el cual es muy interesante para mostrar el array en pantalla */

// este bucle for es para recorrer miArray

for(x of miArray){

    document.write(x + "<br>");

}