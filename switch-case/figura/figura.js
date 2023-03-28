let figure = prompt("Ingrese una figura geometrica");

switch (figure) {
    case "triangulo":
        let number1 = parseFloat(prompt("Ingrese un numero"));
        let number2 = parseFloat(prompt("Ingrese otro numero"));
        op = (number1 * number2) / 2;
        console.log("El area del triangulo es ", op);
        break;
    case "rectangulo":
        let number3 = parseFloat(prompt("Ingrese un numero"));
        let number4 = parseFloat(prompt("Ingrese otro numero"));
        op2 = number3 * number4;
        console.log("El area del rectangulo es ", op2);
        break;
    case "circulo":
        let number5 = parseFloat(prompt("Ingrese un numero"));
        op3 = 3.14 * number5 * number5;
        console.log("El area del circulo es ", op3);
        break;
    default:
        console.log("La figura ingresada no es valida");
        break;
}