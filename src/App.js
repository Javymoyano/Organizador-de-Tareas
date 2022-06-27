
import './App.css';

import './hojas-de-estilo/TareaFormulario.css'
import './hojas-de-estilo/ListaDeTareas.css'
import ListaDeTareas from './componentes/ListaDeTareas';
import Barra from './componentes/Barra'

function App() {
  return (
    <div className="contenedor">
      <div className='tareas-principal'>
      <Barra className='barra'/>
      <br/>
      
      {/* <h1>LISTA DE TAREAS</h1> */}
      <ListaDeTareas/>
      {/* <Tareas texto= 'Aprender React'/> */}
    </div>
    </div>
  );
}

export default App;
