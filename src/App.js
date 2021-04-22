import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import image from "./components/drapixie.jpg";

function App() {
  return (
    <Fragment>
      <h1 className="principal-title">Administrador de Pacientes</h1>

      <div className="container principal-container">

        <div className="one-half column form-container">
          <Formulario />
        </div>
      </div>

      <div className="container-principal__img">
        <img src={image} className="principal-img" />
      </div>
    </Fragment>
  );
}

export default App;
