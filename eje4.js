/*
Ejercicio 4: Cuál es mayor?
Descripción: Diseña una función cualEsMayor que lea dos números enteros y los compare. Como resultado debe mostrar un mensaje que diga si el primero es mayor, el segundo es mayor o si son iguales.
*/
 function cualEsMayor(num1,num2){
     if( num1 > num2 ){
         console.log(`El primero es mayor`);
     }
     else if( num2 > num1 ){
         console.log(`El segundo es mayor`);
     }
     else{
         console.log(`Son iguales`);
     }
 }
 console.log("Encuentra el numero mayor");
 let numero1 = prompt("Ingrese el numero1: ");
 let numero2 = prompt("Ingrese el numero2: ");
 cualEsMayor(numero1,numero2);

/*
Desafío: Modificar el programa para que, en lugar de imprimir el resultado de la función, la función retorne el resultado y éste sea impreso en el programa principal.
*/
console.log("Desafio");
 function cualEsMayorMod(num1,num2){
     if( num1 > num2 ){
        return 1;
     }
     else if( num2 > num1 ){
         return 2;
     }
     else{
         return 0;
     }
 }
 console.log("Encuentra el numero mayor version modificada");
 if (cualEsMayorMod(numero1,numero2) == 1){
     console.log("El primero es mayor");
 }
 else if(cualEsMayorMod(numero1,numero2) == 2){
     console.log("El segundo es mayor");
 }
 else{
     console.log("Son iguales")
 }
