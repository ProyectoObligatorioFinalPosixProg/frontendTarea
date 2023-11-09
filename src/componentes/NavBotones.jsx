import React from "react";

function NavBotones(prop){
    const inicializar=()=>{
        prop.click(false,false,false); //tarea, usuario, listadoTarea
    }
    const abilitarFormularioTarea=()=>{
        inicializar();
        prop.click(true,false,false); //tarea, usuario, listadoTarea
    }
    const abilitarFormularioRegistrarse=()=>{
        inicializar();
        prop.click(false,true,false); //tarea, usuario, listadoTarea
    }
    const abilitarListadoTarea=()=>{
        inicializar();
        prop.click(false,false,true); //tarea, usuario, listadoTarea
    }
    return(
        <>
        <button onClick={abilitarFormularioTarea}>Crear Tarea</button>
        <button onClick={abilitarFormularioRegistrarse}>Registrarse</button>
        <button onClick={abilitarListadoTarea}>Listar Tareas</button>
        </>
    );
}

export default NavBotones;