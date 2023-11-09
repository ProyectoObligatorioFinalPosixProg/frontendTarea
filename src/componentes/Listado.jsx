import {useFetch} from '../custom/useFetch';
import { useState } from 'react';

function Listado(){
  const {data: tareaData} = useFetch("#"); 
  const [listadoTarea,setListadoTarea] = useState(false);
  const [encabezadoListadoTarea,setEncabezadoListadoTarea] = useState(false);

  const {data: usuarioData} = useFetch("#"); 
  const [listadoUsuario,setListadoUsuario] = useState(false);
  const [encabezadoListadoUsuario,setEncabezadoListadoUsuario] = useState(false);

   const inicializar = () =>{
    //filas
    setListadoTarea(false);
    setListadoUsuario(false);

    //encabezados
    setEncabezadoListadoTarea(false);
    setEncabezadoListadoUsuario(false);
  }
  
  //tarea
  const listarTarea = () =>{
    inicializar();
    setListadoTarea(true);
    setEncabezadoListadoTarea(true);
  }
  //usuario
  const listarUsuario = () =>{
    inicializar();
    setListadoUsuario(true);
    setEncabezadoListadoUsuario(true);
  }

  return (
    <div className="navListar">
      <button onClick={listarTarea}>Listar tarea</button>
      <button onClick={listarUsuario}>Listar usuario</button>

      {//tarea
       encabezadoListadoTarea && <div className='encabezadoProducto'>
          <div>Titulo</div>
          <div>IdAutor</div>
          <div>IdUsuario</div>
          <div>cuerpo</div>
          <div>categorias</div>
        </div>
      }
      
      {//usuario
         encabezadoListadoUsuario && <div className='encabezadoProducto'>
          <div>Titulo</div>
          <div>IdAutor</div>
          <div>IdUsuario</div>
          <div>cuerpo</div>
          <div>categorias</div>
        </div>
      }
      
      {//tarea
        listadoTarea && tareaData?.map((tarea) => (
        <div key={tarea.id}>
          <div>{tarea.nombre}</div>
          <div>{tarea.tipo}</div>
          <div>{tarea.precio}</div>
          <div>{tarea.gramos}</div>
        </div>
        ))
      }
      {//usuario
        listadoUsuario && tareaData?.map((usuario) => (
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