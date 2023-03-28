let valorProducto = parseInt(prompt("Ingrese el precio del producto"));
let valorDescuento = parseFloat(prompt("Ingrese el valor del descuento"));

switch (valorDescuento > 0 && valorDescuento <= 100) {
    case (true):
        op = valorProducto * valorDescuento / 100;
        precioFinal = valorProducto - op;
        console.log("El valor del producto con el descuento es ", precioFinal)
        break;

    default:
        console.log("No es valido su descuento")
        break;
}