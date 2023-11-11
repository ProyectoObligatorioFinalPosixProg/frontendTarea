import React, { useState, useEffect } from 'react';

function ModificarTarea({ idUsuario, nombre, email}) {
    const [formularioData, setFormularioData] = useState({
        nombre: "",
        email: "",
        password: ""
    });

    // Utilizar useEffect para actualizar el estado cuando las propiedades cambien
    useEffect(() => {
        setFormularioData({
            nombre: nombre || "",
            email: email || "",
            password: password || ""
        });
    }, [idUsuario, nombre, email]);

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
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formularioData),
        })
            .then(response => response.json())
            .then(data => {
                alert("El usuario fue modificada con éxito");
                window.location.reload();
            })
            .catch(error => console.error('Error modificando elemento:', error));
    };

    return (
        <form onSubmit={onSubmit}>
            Nombre: <input type="text" value={formularioData.nombre} onChange={onChange} name="nombre" />
            Email: <input type="text" value={formularioData.email} onChange={onChange} name="email" />
            Password: <input type="text" value={formularioData.password} onChange={onChange} name="password" />
            <button type='submit'>Guardar</button>
        </form>
    );
}

export default ModificarTarea;
