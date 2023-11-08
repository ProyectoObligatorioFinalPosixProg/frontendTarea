import '../estilos/estilos.css';
import {useFetch} from '../custom/useFetch';

function Listado(){
  const {data: tareaData} = useFetch("#"); 
  const [listadoTarea,setListadoTarea] = useState(false);
  const [encabezadoListadoTarea,setEncabezadoListadoTarea] = useState(false);

   const inicializar = () =>{
    //filas
    setListadoTarea(false);

    //encabezados
    setEncabezadoListadoTarea(false);
  }
  
  //tarea
  const listarTarea = () =>{
    inicializar();
    setListadoTarea(true);
    setEncabezadoListadoTarea(true);
  }

  return (
    <div className="navListar">
      <button onClick={listarTarea}>Listar tarea</button>

      {
       encabezadoListadoTarea && <div>
          <div>Titulo</div>
          <div>IdAutor</div>
          <div>IdUsuario</div>
          <div>cuerpo</div>
          <div>categorias</div>
        </div>
      }    
      {
        listadoTarea && tareaData?.map((tarea) => (
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