import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import image from "./components/drapixie.jpg";
import Cita from "./components/Cita";
import logo from "./components/logo.png";

function App() {
  //citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas")); //revisa si hay citas guardadas sino, inicia como un  rray vacio
  //local storage, solo almacena string asi que hay que parsear el arreglo dentro de un string
  if (!citasIniciales) {
    //si no hay citas iniciales, sera un array vacio
    citasIniciales = []; //pasa a ser el valor inicial del useEstate
  }

  //arreglo de citas
  //cuando se cree una cita se guarda en el principal
  const [citas, guardarCitas] = useState(citasIniciales); //empieza como array vacio
  //ya que tendremos varias citas, y de momento se inicia sin nada

  //useEffect para realizar operaciones cuando el state cambia
  //para guardar los cambios sin recargar AARAY DE DEPENDENCIAS
  useEffect(() => {
    //siempre es un arrow function
    let citasIniciales = JSON.parse(localStorage.getItem("citas")); //se lo pasamos de nuevo para q no salga el error
    //console.log('listo');//document ready, useEffect se ejecuta cuando el componente esta listo o cuando hay cambios
    //en el componente
    if (citasIniciales) {
      //si hay algo
      localStorage.setItem("citas", JSON.stringify(citas)); //entonces le pasaamos citas y le pasamos el json
    } else {
      //si no hay nada
      localStorage.setItem("citas", JSON.stringify([])); //sera un array vacio
    }
  }, [citas]); //se pasa un arreglo vacio para que se ejecute una vez, siempre pasar por que si se hace consulta a
  //una api por ejemplo se va a ciclar
  //colocar las citas en el storage, cada vez que hayan nuevas citas o se elimine, con el arregl vacio (dependencias)
  //en el array vacio ponemos citas

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

  //funcion que elimina cita por id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id); //itera en todas las citas como un forEach o un map, accedemos a cada cita
    //en forma individual. hay que poner !== para que filtre y traiga los diferentes, si no se hace esto
    //al darle eliminar me va a eliminar todos los registros menos el que quiero
    guardarCitas(nuevasCitas);
  };

  //mensaje condicional
  const titulo = citas.length === 0 ? "No hay Citas" : "Administra tus Citas";

  return (
    <Fragment>
      <div className='header'>
        <h1 className="principal-title">Administrador de Pacientes</h1>

        <div className="logo-style">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>

      <div className="container">
        <div className="column form-container style-container">
          <Formulario crearCita={crearCita} />
        </div>
      </div>

      <div className="img-container">
        <img src={image} className="img" alt="imagen principal" />
      </div>

      <div className="citas-container">
        <h2 className="sub-title">{titulo}</h2>
        <div>
          {citas.map((cita) => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
