import React, {useState} from 'react';
import Listado from './componentes/Listado';
import NavBotones from './componentes/NavBotones';

function App() {

  const [formularioTarea,setFormularioTarea] = useState(false); 
  const [formularioRegistrarUsuario,setFormularioRegistrarUsuario] = useState(false);
  const [listadoDeTareas,setFormularioListadoDeTareas] = useState(false);
  
  const logicaNavaLoQueSeVe = (tarea, usuario, listadoTarea)=>{
    setFormularioTarea(tarea);
    setFormularioRegistrarUsuario(usuario);
    setFormularioListadoDeTareas(listadoTarea)
  }  

  return (
    <div className="App">
      <header>
        <nav>
          <NavBotones click={logicaNavaLoQueSeVe} />
        </nav>
      </header>
      {listadoDeTareas && <Listado />}
    </div>
  );
}

export default App;
