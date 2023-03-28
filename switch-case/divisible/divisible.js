let num1 = prompt("ingrese un numero")
let validar = num1 % 3 == 0 && num1 % 5 == 0
switch (validar) {
    case true:
        console.log("el numero es divisible entre 3 y 5");

        break;

    default:
        console.log("el numero no es divisible")
        break;
}