import React from 'react';

function FormularioTarea(){
    const capturarValoresFormulario= ()=>{
        const idAutor = document.getElementById(idAutor);
        const idUsuario = document.getElementById(idUsuario);
        const cuerpo = document.getElementById(cuerpo);
        const categorias = document.getElementById(categorias);
        const fechaDeCreacion = document.getElementById(fechaDeCreacion);
        let formularioData = {
            idAutor,
            idUsuario,
            cuerpo,
            categorias,
            fechaDeCreacion
        }
        return formularioData;
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        fetch('#', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(capturarValoresFormulario()),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Tarea creada:', data);
            alert("Fue creado con exito");
            window.location.reload();
        })
        .catch(error => console.error('Error creando tarea:', error));
    }

    return(
        <form onSubmit={onSubmit}>
            IdAutor: <input type="text" id="idAutor" />
            IdUsuario: <input type="text" id="idUsuario" /> 
            Cuerpo: <input type="text" id="cuerpo" /> 
            Categorias: <input type="text" id="categorias" /> 
            Fecha de creación: <input type="text" id="fechaDeCreacion" /> 
        </form>
    )
}

export default FormularioTarea;
