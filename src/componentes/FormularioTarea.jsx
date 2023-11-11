import React from 'react';

function FormularioTarea() {
    const capturarValoresFormulario = () => {
        const titulo = document.getElementById('titulo').value;
        const idAutor = document.getElementById('idAutor').value;
        const idUsuario = document.getElementById('idUsuario').value;
        const cuerpo = document.getElementById('cuerpo').value;
        const categorias = document.getElementById('categorias').value;
        let formularioData = {
            titulo: titulo,
            idautor: idAutor,
            idusuario: idUsuario,
            cuerpo: cuerpo,
            categorias: categorias,
        }
        return formularioData;
    }

    const onSubmit = (event) => {
        event.preventDefault();

        fetch('http://127.0.0.1:8001/api/v1/tarea', {
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

    return (
        <form onSubmit={onSubmit}>
            Título: <input type="text" id="titulo" />
            IdAutor: <input type="text" id="idAutor" />
            IdUsuario: <input type="text" id="idUsuario" />
            Cuerpo: <input type="text" id="cuerpo" />
            Categorias: <input type="text" id="categorias" />
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default FormularioTarea;
