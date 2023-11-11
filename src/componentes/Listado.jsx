import { useFetch } from '../custom/useFetch';
import { useState } from 'react';

function Listado({ tareas, usuarios }) {
  const { data: tareaData } = useFetch("http://127.0.0.1:8001/api/v1/tarea");
  const { data: usuarioData } = useFetch("#");

  const eliminarTarea = (idTarea) => {
    fetch(`http://127.0.0.1:8001/api/v1/tarea/${idTarea}`, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        alert("La tarea fue eliminada");
        window.location.reload();
      })
      .catch(error => console.log(error));
  }

  const eliminarUsuario = (idUsuario) => {
    fetch(`http://127.0.0.1:8001/api/v1/tarea/${idUsuario}`, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        alert("El usuario fue eliminada");
        window.location.reload();
      })
      .catch(error => console.log(error));
  }
  return (
    <div className="navListar">

      <table border="1">
        {
          tareas && <thead>
            <tr>
              <th>Titulo</th>
              <th>IdAutor</th>
              <th>IdUsuario</th>
              <th>Cuerpo</th>
              <th>Categorias</th>
            </tr>
          </thead>
        }
        <tbody>
          {
            tareas && tareaData?.map((tarea) => (
              <tr key={tarea.id}>
                <td>{tarea.titulo}</td>
                <td>{tarea.idautor}</td>
                <td>{tarea.idusuario}</td>
                <td>{tarea.cuerpo}</td>
                <td>{tarea.categorias}</td>
                <td><button onClick={() => eliminarTarea(tarea.id)} id="eliminar">Eliminar</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <table border="1">
        {
          usuarios && <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
        }
        <tbody>
          {
            usuarios && usuarioData?.map((usuario) => (
              <tr key={usuario.id}>
                <div></div>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td onClick={() => eliminarUsuario(usuario.id)}>Eliminar</td>
              </tr>
            ))
          }
        </tbody>
      </table>


    </div>
  );
}

export default Listado;