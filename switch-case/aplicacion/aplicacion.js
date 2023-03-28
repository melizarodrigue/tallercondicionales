const estados = {edicion:"edicion",visualizacion:"visualizacion"};
let estadA= estados.visualizacion;
function cambiarestado(nuevoEstado) {
    switch (nuevoEstado) {
        case estados.edicion:
            console.log("modo edicion");
            break;
         case  estados.visualizacion:
            console.log("modo de visualizacion");
            break;
        default:
            console.log("estado no reconocido");
            estadoA= nuevoEstado;
            cambiarEstado(estados.edicion);
            cambiarEstado(estados.visualizacioin);
            break;
    }
    
}
