import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import image from "./components/drapixie.jpg";
import Cita from "./components/Cita";

function App() {
  //arreglo de citas
  //cuando se cree una cita se guarda en el principal
  const [citas, guardarCitas] = useState([]); //empieza como array vacio
  //ya que tendremos varias citas, y de momento se inicia sin nada

  //funcion que modifique,leer las citas nuevas y las que tenemos
  //funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    //console.log(cita);//para ver si se esta comunicando crear cita con el componente formulario
    //crea la cita y la agrega al array de citas
    guardarCitas([
      //funcion q modifica el state
      ...citas, //copiar el state
      cita,
    ]);
  };

  return (
    <Fragment>
      <h1 className="principal-title">Administrador de Pacientes</h1>

      <div className="container">
        <div className="column form-container style-container">
          <Formulario crearCita={crearCita} />
        </div>
      </div>

      <div className="img-container">
        <img src={image} className="img" />
      </div>

      <div className="citas-container">
        <h2 className="principal-title">Administrador de Citas</h2>
        <div>
          {citas.map((cita) => (
            <Cita key={cita.id} cita={cita} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
