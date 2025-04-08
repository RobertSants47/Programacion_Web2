let inventario = [];
function mostrarMenu(){
    return parseInt(prompt(
        "Opciones Disponibles: \n" +
        "1. Agregar Producto: \n"+
        "2. Mostrar todos los productos: \n"+
        "3. Buscar producto por nombre: \n"+
        "4. Salir \n"+
        "Elige una opción: "

    ));
}


function agregarProducto(){
    let nombrerPoducto = prompt("Ingresa el nombre del producto: ");
    let cantidadProducto = parseInt(prompt("Ingresa la cantidad del producto: "));
    let precioProducto = parseInt(prompt("Ingresa el precio del producto: "));
    if(cantidadProducto > 0 && precioProducto > 0){
        let producto = {
            nombre : nombrerPoducto,
            cantidad : cantidadProducto,
            precio : precioProducto
        };
        inventario.push(producto);
        alert("Producto agregado");

    }else{
        alert("Cantidad y precio del producto no especificado");
    }
    
   
}

function mostrarProducto(){
    if(inventario.length === 0){
        alert("No hay productos en el inventario");
    }else{
        let mensaje = "Productos en el inventario: ";

        for(let i=0; i< inventario.length; i++){
            mensaje+= `Producto: ${i + 1} \n `+
                       `Nombre: ${inventario[i].nombre}\n`+
                       `Cantidad: ${inventario[i].cantidad}\n` +
                       `Precio: ${inventario[i].precio}\n` +
                       "--------------------------------------\n";
        }
        alert(mensaje);
    }
}

function buscarProducto(){
    return console.log("En proceso");
}

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1: 
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa");
                break;
            default:
                alert("Opción no válida. Intenta de nuevo");
        }
    }
}

function buscarProductoPorNombre(){
    let nombreBuscado = prompt("Nombre del producto a buscar: ");
    let encontrado = false;

    for(let i = 0; i < inventario.length; i++){
        if(inventario[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()){
            alert(`Producto encontrado:\n +
            Nombre: ${inventario[i].nombre}\n +
            Cantidad: ${inventario[i].cantidad}\n +
            Precio: ${inventario[i].precio}`);
            encontrado = true;
            break;
        }
    }

    if(!encontrado){
        alert("Producto no encontrado en el inventario.");
    }
    console.log("Inventario actualizado:", inventario);
}


iniciarPrograma();