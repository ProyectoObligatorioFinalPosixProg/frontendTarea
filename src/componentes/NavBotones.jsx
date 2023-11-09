import React from "react";

function NavBotones(prop){
    const inicializar=()=>{
        prop.click(false,false,false,false); //tarea, usuario, listadoTareas, listadoUsuarios
    }
    const abilitarFormularioTarea=()=>{
        inicializar();
        prop.click(true,false,false,false); //tarea, usuario, listadoTareas, listadoUsuarios
    }
    const abilitarFormularioRegistrarse=()=>{
        inicializar();
        prop.click(false,true,false,false); //tarea, usuario, listadoTareas, listadoUsuarios
    }
    const abilitarListadoTareas=()=>{
        inicializar();
        prop.click(false,false,true,false); //tarea, usuario, listadoTareas, listadoUsuarios
    }
    const abilitarListadoUsuarios=()=>{
        inicializar();
        prop.click(false,false,false,true); //tarea, usuario, listadoTareas, listadoUsuarios
    }
    return(
        <>
        <button onClick={abilitarFormularioTarea}>Crear Tarea</button>
        <button onClick={abilitarFormularioRegistrarse}>Registrarse</button>
        <button onClick={abilitarListadoTareas}>Listar Tareas</button>
        <button onClick={abilitarListadoUsuarios}>Listar Usuarios</button>
        </>
    );
}

export default NavBotones;