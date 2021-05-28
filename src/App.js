import React, { Fragment } from "react";
import { useState, useEffect } from "react/cjs/react.development";

import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0)
  const [mostrarPregunta, actulizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, guardarCrearGasto] = useState(false)


  useEffect(()=>{
    if(crearGasto){
      guardarGastos([
        ...gastos,
        gasto
      ])
    }
    const presupuestoRestante = restante - gasto.cantidad
    guardarRestante(presupuestoRestante)
    guardarCrearGasto(false)
  }, [gasto])



  return (
    <Fragment>
      <h1 className="text-center text-white fs-1 text-uppercase p-5">App de presupuestos</h1>
      <div className="container p-5 bg-white shadow rounded">
        {mostrarPregunta ?
          (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actulizarPregunta={actulizarPregunta}
            />
          )
          :
          (
            <div className="row mb-3 mt-3">
              <div className="col-md-6">
                <Formulario
                  guardarGasto = {guardarGasto}
                  guardarCrearGasto = {guardarCrearGasto}
                />
              </div>
              <div className="col-md-6">
                <Listado 
                  gastos = {gastos}
                />
                <ControlPresupuesto 
                  presupuesto = {presupuesto}
                  restante = {restante}
                />
              </div>
            </div>
          )}


      </div>
    </Fragment>
  );
}

export default App;
