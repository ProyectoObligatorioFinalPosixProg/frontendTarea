import React from 'react';

function FormularioRegistroUsuario(){
    const capturarValoresFormulario= ()=>{
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmarPassword = document.getElementById('confirmarPassword').value;
        let formularioData = {
            nombre: nombre,
            email: email,
            password: password,
            password_confirmation: confirmarPassword
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