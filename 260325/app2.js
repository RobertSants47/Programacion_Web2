// Inicializamos un arreglo par almacenar las tareas 

let tareas = []; 

// Funcion para mostrar un menú

function mostrarMenu(){
    return parseInt( prompt(
        "Opciones disponubles: \n" +
        "1. Agregar tarea \n" + 
        "2. Ver todas las tareas \n"+
        "3. Marcar como completada la tarea \n"+
        "4. Salir \n" + 
        "Elige una opcion: "
));
}

function agregarTarea(){

    let nombre = prompt("Introduce el nombre de la tarea:");
    if(nombre){
        let tarea ={
            nombre : nombre,
            completado: false
        };
        tareas.push(tarea);
        alert ("Tarea agregada exitosamente");
    }else{
        console.log("El nombre de la tarea no puede estar vacío");
    }
}

function verTareas(){
    if(tareas.length === 0){
        alert ("No hay tareas en lista");
    }else{
        let mensaje = "Lista de tareas: \n";
        tareas.forEach((tarea,index)=>{
            mensaje += `$(index+1) . $(tarea.nombre) [ $(tarea.completada ? "Completada" : "Pendiente")]\n`;
        });
        alert(mensaje);
    }
}

function marcarTareaCompletada(){
    console.log("En proceso");
}

//Funcion principal para manejar el programa

function iniciarPrograma(){
    let opcion = mostrarMenu();
    let condicion = true;
    while(condicion){
        switch (opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa");
                condicion = false;
                break;
            default:
                alert("Saliendo del programa");
        }
    }
    alert("Saliendo del programa");
    
}


//Iniciar programa 
iniciarPrograma();
