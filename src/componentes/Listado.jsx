import {useFetch} from '../custom/useFetch';
import { useState } from 'react';

function Listado({tareas,usuarios}){
  const {data: tareaData} = useFetch("#"); 
  const {data: usuarioData} = useFetch("#"); 

  return (
    <div className="navListar">

      {
       tareas && <div className='encabezadoTareas'>
          <div>Titulo</div>
          <div>IdAutor</div>
          <div>IdUsuario</div>
          <div>cuerpo</div>
          <div>categorias</div>
          <div>Fecha de creación</div>
        </div>
      }
      
      {
         usuarios && <div className='encabezadoUsuarios'>
          <div>Titulo</div>
          <div>IdAutor</div>
          <div>IdUsuario</div>
          <div>cuerpo</div>
          <div>categorias</div>
        </div>
      }
      
      {
        tareas && tareaData?.map((tarea) => (
        <div key={tarea.id}>
          <div>{tarea.nombre}</div>
          <div>{tarea.tipo}</div>
          <div>{tarea.precio}</div>
          <div>{tarea.gramos}</div>
        </div>
        ))
      }
      {
        usuarios && usuarioData?.map((usuario) => (
        <div key={usuario.id}>
          <div>{usuario.nombre}</div>
          <div>{usuario.email}</div>
        </div>
        ))
      }

    </div>
  );
}

export default Listado;