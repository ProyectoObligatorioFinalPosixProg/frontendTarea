import React from 'react';

function Login() {
    const capturarValoresFormulario = () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        let formularioData = {
            email: email,
            password: password
        }
        return formularioData;
    }

    const onSubmit = (event) => {
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
    return (
        <form onSubmit={onSubmit}>
            Email: <input type="text" id="email" />
            Password: <input type="text" id="password" />
        </form>
    )
}

export default Login;