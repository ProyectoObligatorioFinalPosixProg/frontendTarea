import React from 'react';

function FormularioRegistroUsuario(){
    const capturarValoresFormulario= ()=>{
        const nombre = document.getElementById(nombre);
        const email = document.getElementById(email);
        const password = document.getElementById(password);
        const confirmarPassword = document.getElementById(confirmarPassword);
        let formularioData = {
            nombre: nombre,
            email: email,
            password: password,
            confirmarPassword: confirmarPassword
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
            console.log('Usuario creado:', data);
            alert("Fue creado con exito");
            window.location.reload();
        })
        .catch(error => console.error('Error creando usuario:', error));
    }

    return(
        <form onSubmit={onSubmit}>
            Nombre: <input type="text" id="nombre" />
            Email: <input type="text" id="email" /> 
            Password: <input type="text" id="password" /> 
            Confirmar password: <input type="text" id="confirmarPassword" /> 
        </form>
    )
}

export default FormularioRegistroUsuario;