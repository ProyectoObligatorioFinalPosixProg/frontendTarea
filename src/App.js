import React, {useState} from 'react';
import Listado from './componentes/Listado';
import NavBotones from './componentes/NavBotones';
import FormularioTarea from './componentes/FormularioTarea';

function App() {

  const [formularioTarea,setFormularioTarea] = useState(false); 
  const [formularioRegistrarUsuario,setFormularioRegistrarUsuario] = useState(false);
  const [listadoDeTareas,setFormularioListadoDeTareas] = useState(false);
  const [listadoDeUsuarios,setListadoDeUsuarios] = useState(false);
  const [login,setLogin] = useState(false);
  
  const logicaNavaLoQueSeVe = (tarea, usuario, listadoTareas, listadoUsuarios, login)=>{
    setFormularioTarea(tarea);
    setFormularioRegistrarUsuario(usuario);
    setFormularioListadoDeTareas(listadoTareas);
    setListadoDeUsuarios(listadoUsuarios);
    setLogin(login);
  }  

  return (
    <div className="App">
      <header>
        <nav>
          <NavBotones click={logicaNavaLoQueSeVe} />
        </nav>
      </header>
      {listadoDeTareas && <Listado tareas="true" />}
      {listadoDeUsuarios && <Listado usuarios="true" />}
      {formularioTarea && <FormularioTarea />}
    </div>
  );
}

export default App;
