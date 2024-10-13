/*
Ejercicio 3: Cuál es el Área?
Descripción: Crea una función llamada calcularAreaTriangulo que tome la base y la altura de un triángulo como argumentos y retorne su área. Recuerda que la fórmula del área de un triángulo es (base * altura) / 2.
*/
function calcularAreaTriangulo(base, altura){
    return (base * altura)/2;
}
console.log("Calcular area de un triangulo o cuadrado")
let base = parseFloat(prompt("Ingrese la base: "));
let altura = parseFloat(prompt("Ingrese la altura: "));
/*

Desafío: Cómo podemos modificar la función anterior para que también calcule el área de un cuadrado? Recuerda que la fórmula del área de un cuadrado es lado * lado .
*/
function calcularAreaCuadrado(base, altura){
    if(base === altura){
        return base * altura;
    }
    else{
        return calcularAreaTriangulo;
    }
}
if (base === altura){
    console.log(`El area del cuadrado es: ${calcularAreaCuadrado(base,altura)}`);
}
else {
    console.log(`El area del triangulo es: ${calcularAreaTriangulo(base,altura)}`);
}