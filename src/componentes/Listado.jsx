import '../estilos/estilos.css';
import {useFetch} from '../custom/useFetch';

function Listado(){
  const {data: tareaData} = useFetch("#"); 
  
  return (
    <div className="navListar">
      <button>Listar tarea</button>

      {
       <div className='encabezadoProducto'>
          <div>Titulo</div>
          <div>IdAutor</div>
          <div>IdUsuario</div>
          <div>cuerpo</div>
          <div>categorias</div>
        </div>
      }
      {
        tareaData?.map((tarea) => (
        <div key={tarea.id} className='listdo'>
          <div>{tarea.nombre}</div>
          <div>{tarea.tipo}</div>
          <div>{tarea.precio}</div>
          <div>{tarea.gramos}</div>
        </div>
        ))
      }

    </div>
  );
}

export default Listado;