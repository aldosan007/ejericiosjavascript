/*
Ejercicio 2: Automatizar operaciones
Descripción: Escribe un programa que imprima los números del 1 al 100. Pero, para múltiplos de tres imprime "Fizz" en lugar del número y para los múltiplos de cinco imprime "Buzz". Para números que sean múltiplos de ambos, tres y cinco, imprime "FizzBuzz".
*/

for (i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0){
        console.log("Fizz")
    }
    else if (i % 5 == 0){
        console.log("Buzz");
    }
    else{
       console.log(`${i}`);       
    }
}

/*
Desafío: Modificar el programa anterior para que imprima solamente los números del 1 al 500, que son pares. Para múltiplos de tres imprime "Fizz" en lugar del número y para los múltiplos de cinco imprime "Buzz". Para números que sean múltiplos de ambos, tres y cinco, imprime "FizzBuzz".

Ejemplo: 2 4 Fizz 8 Buzz...
*/
console.log("Desafio");
for (i = 1; i <= 500; i++){
    if(i % 2 == 0){
        if((i % 3 == 0) && (i % 5 == 0)){
            console.log("FizzBuzz");
        }
        else if( i % 3 ==0){
            console.log("Fizz");
        }
        else if(i % 5 ==0){
            console.log("Buzz");
        }
        else{
            console.log(`${i}`);
        }
    }
}