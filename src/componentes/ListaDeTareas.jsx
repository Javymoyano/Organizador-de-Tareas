import React, { useState } from 'react'
import TareaFormulario from './TareaFormulario'
import '../hojas-de-estilo/ListaDeTareas.css'
import Tareas from './Tarea'

function ListaDeTareas() {

    const [tareas, setTareas] = useState ([]); 

    // AGREGAR UNA TAREA
    
    const agregarTarea = (tarea) => {
      if(tarea.texto.trim()) { // si el texto no esta vacio
        tarea.texto = tarea.texto.trim(); // elimina espacios en blanco al inicio y al final
        
        const tareasActualizadas = ([tarea, ...tareas ]); // agrega la tarea al inicio de la lista
        setTareas(tareasActualizadas); // actualiza la lista de tareas
       
          
        }
        
      }

    // ELIMINAR UNA TAREA

    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);

    }

    // COMPLETAR UNA TAREA

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map(tarea => { // recorre la lista de tareas
          if(tarea.id === id) { // si el id de la tarea es igual al id de la tarea que se quiere completar
            tarea.completada = !tarea.completada; // cambia el valor de completada a true o false
          }
          return tarea;
        } // fin del map
        );
        setTareas(tareasActualizadas);
      } 




  return (
    <>
    <TareaFormulario onSubmit={agregarTarea} />
    <div className='tarea-lista-contenedor'>
        { 
          tareas.map((tarea) => 
          <Tareas
            key={tarea.id} // identificador de la tarea
            id={tarea.id} // identificador de la tarea
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea} 
            
            />
          )
          }
    </div>
    </>
  )
} 



export default ListaDeTareas