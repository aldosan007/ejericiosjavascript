/*
Ejercicio 1: Almacenar datos
Descripción: Crea un programa que defina variables para almacenar tu nombre, edad, y si eres estudiante de programación (verdadero/falso). Luego, imprime estas variables en consola.
*/
let nombre = prompt("Ingrese su nombre: ");
console.log(`Su nombre es ${nombre}`);
let edad = parseInt(prompt("Ingrese su edad: "));
console.log(`Su edad es ${edad}`);
let estudiante_programacion = prompt("Es estudiante de programacion?(SI/NO): ");
if (estudiante_programacion =='SI'){
    console.log(`Verdadero, ${nombre} es un estudiante de programacion`);
}else{
    console.log(`Falso, ${nombre} no es un estudiante de programacion`);
}
estudiante_programacion = Boolean(estudiante_programacion);
console.log("Desafío: De qué tipo de dato es cada variable utilizada y por qué?"); 
console.log("nombre = Es una variable del tipo de dato cadena porque almacena el nombre de la persona en formato texto.");
console.log(`Tipo de dato nombre: ${typeof(nombre)}`);
console.log("edad = Es una variable del tipo de dato numerico porque almacena la edad de la persona en formato numerico.");
console.log(`Tipo de dato edad: ${typeof(edad)}`);
console.log("estudiante_programacion = Es una variable del tipo de dato booleano porque almacena un valor que es true o false para saber si es o no un estudiante de programacion.");
console.log(`Tipo de dato estudiante_programacion: ${typeof(estudiante_programacion)}.`);