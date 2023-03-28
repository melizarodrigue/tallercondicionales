let numero = parseFloat(prompt("ingrese un numero"));
let unidadMedida = prompt("ingrese una medida(metro,decametro,decimetro");
switch (unidadMedida) {
    case "metro":
        convertir = numero / 1000;
        console.log(numero, "metros a centimetro", convertir);
        break;
    case "decimetro":
        convertir = numero / 10;
        console.log(numero, "decimetro a centimetros", convertir);
        break;
    case "decametro":
        convertir = numero / 100;
        console.log(numero, "decimetro a centimetro", convertir);
    default:
        console.log("ingresa una unidad de medida valida");
        break;
}