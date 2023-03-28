console.log("Seleccione una opción:");
console.log("1. Saludar");
console.log("2. Sumar dos números");
console.log("3. Multiplicar dos números");
console.log("4. Salir");

const opcion = parseInt(prompt("Ingrese el número de la opción que desea ejecutar"));

switch (opcion) {
    case 1:
        console.log("Hola, ¡bienvenido!");
        break;
    case 2:
        const num1 = parseInt(prompt("Ingrese el primer número"));
        const num2 = parseInt(prompt("Ingrese el segundo número"));
        const resultadoSuma = num1 + num2;
        console.log(`El resultado de la suma es: ${resultadoSuma}`);
        break;
    case 3:
        const num3 = parseInt(prompt("Ingrese el primer número"));
        const num4 = parseInt(prompt("Ingrese el segundo número"));
        const resultadoMultiplicacion = num3 * num4;
        console.log(`El resultado de la multiplicación es: ${resultadoMultiplicacion}`);
        break;
    case 4:
        console.log("¡Hasta luego!");
        break;
    default:
        console.log("La opción seleccionada no es válida");
        break;
}