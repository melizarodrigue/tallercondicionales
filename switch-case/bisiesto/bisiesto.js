let anio = parseInt(prompt("ingrese un año"));
let calcular = anio % 4 == 0 && anio % 100 == 0 || anio % 400 == 0
switch (calcular) {
    case true:
        console.log("el año es bisiesto");
        break;

    default:
        console.log("el año no es bisiesto");
        break;
}