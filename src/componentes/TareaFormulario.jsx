import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';


export default function TareaFormulario(props) { 

    const [input, setInput] = useState('');

    const manejarCambio = (e) => {
         setInput(e.target.value);
        }
        
    const manejarEnvio = (e) => {
        e.preventDefault();
        
            const tareaNueva = {
                id: uuidv4(), 
                texto: input,
                completada: false
            }
           props.onSubmit(tareaNueva);
        }
 

  return (
    <form className='tarea-formulario'
    onSubmit={manejarEnvio} >
        <Box/>
        <TextField fullWidth label="Ingresar tarea" id="fullWidth" onChange={manejarCambio} />
        {/* <input className='input-tarea' 
        type='text' 
        placeholder='Nombre de la tarea' 
        name='texto' 
        onChange={manejarCambio}/> */}
        <Button type='submit' variant='contained' color='primary'>
            Agregar tarea
        </Button>
        
        {/* <button className='boton-tarea' >Agregar Tarea</button> */}


    </form>
  )
}
