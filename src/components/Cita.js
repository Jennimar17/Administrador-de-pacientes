import React from 'react';
import PropTypes from 'prop-types';//paquete para documentar componentes

const Cita = ({cita, eliminarCita}) => ( 
    <div className='style-container cards-citas'>
        <h3><span>{cita.paciente}</span></h3>
        <p><strong>Motivo: </strong><span>{cita.motivo}</span></p>
        <p><strong>Fecha: </strong><span>{cita.fecha}</span></p>
        <p><strong>Hora: </strong><span>{cita.hora}</span></p>
        <p><strong>Observaciones: </strong><span>{cita.observaciones}</span></p>

        <button
        className='button eliminar button-eliminar-style'
        onClick={() => eliminarCita(cita.id)}//poner arrow funtion para espperar a que se de el evento onclick
        >Eliminar &times;</button>
    </div>
 );

 //propTypes
//documenta los valores dados en los componentes y si son requeridos
//ejemplo crarCita en es una function (func)
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

 
export default Cita;