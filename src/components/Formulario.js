import React, {Fragment, useState} from 'react';

const Formulario = () => {


    //crea state de citas
const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''

});

//funcion que se ejecuta cada que un usuario escribe en un input
const actualizarState = e => {//se agrega un evento, cada q cambia
    //console.log(e.target.value);//sirve para saber de que campo viene la info y escucha la info q se escribe
    actualizarCita({//valor que traes a useState
        ...cita,
        [e.target.name]: e.target.value //array destructuring
    })

}

//extraer los valores
const {mascota, propietario, fecha, hora, sintomas} = cita;


    return (  
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre Dueño de la Mascota'
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha de Alta</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}
                /> 
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className='u-full-width'
                    name='sintomas'
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button 
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </Fragment>
        
    );
}
 
export default Formulario;