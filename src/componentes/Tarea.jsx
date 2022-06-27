import React from 'react'
import '../hojas-de-estilo/Tareas.css';
import {TiDeleteOutline} from 'react-icons/ti';

function Tareas( {texto, completada, id, eliminarTarea, completarTarea} ) {
  return (
    <div className= {completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <div className='tarea-texto'
        onClick={() => completarTarea(id)}>
          
            { texto }
        </div>
        <div className='tarea-contenedor-iconos'
             onClick={() => eliminarTarea(id)}>
          
            <TiDeleteOutline className='tarea-icono'/>

        </div>
    </div>
  )
}

export default Tareas