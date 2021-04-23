import React from 'react';

const Cita = ({cita}) => ( 
    <div className='style-container cards-citas'>
        <h3><span>{cita.paciente}</span></h3>
        <p><strong>Motivo:</strong> <span>{cita.motivo}</span></p>
        <p><strong>Fecha:</strong> <span>{cita.fecha}</span></p>
        <p><strong>Hora:</strong> <span>{cita.hora}</span></p>
        <p><strong>Observaciones:</strong> <span>{cita.sintomas}</span></p>
    </div>
 );

 
export default Cita;