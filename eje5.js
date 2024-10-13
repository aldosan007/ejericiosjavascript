/*
Ejercicio 5: Antecesor alfabético
Descripción: Escribe una función que tome dos palabras e indique si la primera palabra es antecesora o sucesora a la segunda, en orden alfabético. Por ejemplo, dadas las palabras "joel" y "josé", el programa debe imprimir que "joel" viene antes que "josé", en orden alfabético.
*/
function comparadorPalabras(palabra1, palabra2){
    let resultado = palabra1.localeCompare(palabra2);
    if (resultado < 0) {
        return(`${palabra1} viene antes que ${palabra2}`);
    }
    else if (resultado > 0) {
        return(`${palabra1} viene despues que ${palabra2}`);
    }
    else{
        return(comparadorPalabrasmod(palabra1, palabra2));
    }
}

let palabra1 = prompt("Ingrese la palabra1: ");
let palabra2 = prompt("Ingrese la palabra2: ");
console.log(comparadorPalabras(palabra1, palabra2));


/*
Desafío: Considerar el caso en que las palabras recibidas sean iguales
*/

function comparadorPalabrasmod(palabra1, palabra2){
    let resultado = palabra1.localeCompare(palabra2);
    if (resultado < 0) {
        return(`${palabra1} viene antes que ${palabra2}`);
    }
    else if (resultado > 0) {
        return(`${palabra1} viene despues que ${palabra2}`);
    }
    else {
        return(`${palabra1} y ${palabra2} son iguales`);
    }
}
