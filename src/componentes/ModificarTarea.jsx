import React, { useState, useEffect } from 'react';

function ModificarTarea({ idTarea, titulo, idAutor, idUsuario, cuerpo, categorias }) {
    const [formularioData, setFormularioData] = useState({
        titulo: "",
        idautor: "",
        idusuario: "",
        cuerpo: "",
        categorias: ""
    });

    // Utilizar useEffect para actualizar el estado cuando las propiedades cambien
    useEffect(() => {
        setFormularioData({
            titulo: titulo || "",
            idautor: idAutor || "",
            idusuario: idUsuario || "",
            cuerpo: cuerpo || "",
            categorias: categorias || ""
        });
    }, [idTarea, titulo, idAutor, idUsuario, cuerpo, categorias]);

    const onChange = event => {
        const { name, value } = event.target;
        setFormularioData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const onSubmit = event => {
        event.preventDefault();
        fetch(`http://127.0.0.1:8001/api/v1/tarea/${idTarea}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formularioData),
        })
            .then(response => response.json())
            .then(data => {
                alert("La tarea fue modificada con éxito");
                window.location.reload();
            })
            .catch(error => console.error('Error creando elemento:', error));
    };

    return (
        <form onSubmit={onSubmit}>
            Titulo: <input type="text" value={formularioData.titulo} onChange={onChange} name="titulo" />
            IdAutor: <input type="text" value={formularioData.idautor} onChange={onChange} name="idautor" />
            IdUsuario: <input type="text" value={formularioData.idusuario} onChange={onChange} name="idusuario" />
            Cuerpo: <input type="text" value={formularioData.cuerpo} onChange={onChange} name="cuerpo" />
            Categorias: <input type="text" value={formularioData.categorias} onChange={onChange} name="categorias" />
            <button type='submit'>Guardar</button>
        </form>
    );
}

export default ModificarTarea;
