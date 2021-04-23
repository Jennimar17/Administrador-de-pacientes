import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {
  //crea state de citas
  const [cita, actualizarCita] = useState({
    paciente: "",
    motivo: "",
    fecha: "",
    hora: "",
    observaciones: ""
  });

  //crear otro state para la validacion del form
  const [error, actualizarError] = useState(false); //inicia como false o null, se inicia con un booleano
  //no como un objeto como los anteriores, depende de lo que estes haciendo es el valor inicial

  //funcion que se ejecuta cada que un usuario escribe en un input
  const actualizarState = (e) => {
    //se agrega un evento, cada q cambia
    //console.log(e.target.value);//sirve para saber de que campo viene la info y escucha la info q se escribe
    actualizarCita({
      //valor que traes a useState
      ...cita,
      [e.target.name]: e.target.value, //array destructuring
    });
  };

  //extraer los valores haciendo destructuring
  const { paciente, motivo, fecha, hora, observaciones } = cita;

  //cuando el usuario presiona agregar cita o envia formlario
  const submitCita = e => {
    e.preventDefault();

    //validar los datos antes de insertarlos en la base de datos
    if (
      paciente.trim() === "" || //trim quita los espacios en blanco
      motivo.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      observaciones.trim() === ""
    ) {
      actualizarError(true); //si envio el form vacio pasa a true--- se muestra el error al usuario
      //console.log("hay un error");
      return; //cuando hay un error clavar return para que no se siga ejecutando el codigo
    }

    //eliminar el mensaje de error y que queda despues de marcar los campos
    actualizarError(false);//lo pasamos al estado original

    //asignar un id:registros repetidos necesitan un key
    cita.id = uuidv4();
    //se instala uuid una libreria que me genera id unicos para los objeto
    

    //crear la cita
    crearCita(cita);//le pasamos la cita, ya con el id que le asigne uuid

    //reiniciar el form
    //con el modificador del state poniendo los campos en blancos se reinicia el form
    actualizarCita({
        paciente: "",
        motivo: "",
        fecha: "",
        hora: "",
        observaciones: ""
    })



  }

  //en los return  no se puede agregar if se pone terniario
  //la condicion error es si el campo esta vacio mandar alerta de error(ya incorporada en skeleton)
  //si se cumple no mostrar nada
  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? <p className = 'alerta-error error-style'>Todos los campos son obligatorios</p>
      : null}

      <form onSubmit={submitCita}>
        <label>Nombre del Paciente</label>
        <input
          type="text"
          name="paciente"
          className="u-full-width"
          placeholder="Nombre del Paciente"
          onChange={actualizarState}
          value={paciente}
        />
        <label>Motivo de Consulta</label>
        <input
          type="text"
          name="motivo"
          className="u-full-width"
          placeholder="Motivo de Consulta"
          onChange={actualizarState}
          value={motivo}
        />
        <label>Fecha de la Cita</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Observaciones</label>
        <textarea
          className="u-full-width"
          name="observaciones"
          onChange={actualizarState}
          value={observaciones}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
