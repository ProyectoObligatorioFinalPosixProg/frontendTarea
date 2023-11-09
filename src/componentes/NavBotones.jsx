import React from "react";

function NavBotones(prop){
    const inicializar=()=>{
        prop.click(false,false,false,false,false); //tarea, usuario, listadoTareas, listadoUsuarios, login
    }
    const abilitarFormularioTarea=()=>{
        inicializar();
        prop.click(true,false,false,false,false); //tarea, usuario, listadoTareas, listadoUsuarios, login
    }
    const abilitarFormularioRegistrarse=()=>{
        inicializar();
        prop.click(false,true,false,false,false); //tarea, usuario, listadoTareas, listadoUsuarios, login
    }
    const abilitarListadoTareas=()=>{
        inicializar();
        prop.click(false,false,true,false,false); //tarea, usuario, listadoTareas, listadoUsuarios, login
    }
    const abilitarListadoUsuarios=()=>{
        inicializar();
        prop.click(false,false,false,true,false); //tarea, usuario, listadoTareas, listadoUsuarios, login
    }
    const abilitarLogin=()=>{
        inicializar();
        prop.click(false,false,false,false,false,true); //tarea, usuario, listadoTareas, listadoUsuarios, login
    }
    return(
        <>
        <button onClick={abilitarFormularioTarea}>Crear Tarea</button>
        <button onClick={abilitarFormularioRegistrarse}>Registrarse</button>
        <button onClick={abilitarListadoTareas}>Listar Tareas</button>
        <button onClick={abilitarListadoUsuarios}>Listar Usuarios</button>
        <button onClick={abilitarLogin}>Login</button>
        </>
    );
}

export default NavBotones;