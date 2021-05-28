import React, {Fragment, useState} from 'react';
import Cerror from './Cerror';
import PropTypes from 'prop-types'


function Pregunta({guardarPresupuesto, guardarRestante, actulizarPregunta}) {

    const [cantidad, guardarCantidad ] = useState(0);

    const [error, guardarError] = useState(false)

    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value,10))
    }
    const definirPresupuestoSubmit = e =>{
        e.preventDefault();
        if(cantidad < 1 || isNaN(cantidad) ){
            guardarError(true)
        }else{
            guardarError(false)
            guardarPresupuesto(cantidad)
            guardarRestante(cantidad)
            actulizarPregunta(false)
        }
        
       
    }

    return (
        <Fragment>
            <h2 className="display-6">Coloca tu presupuesto</h2>
            {error ? <Cerror mensaje = "el Presupuesto es incorrecto "/> : null}
            <form onSubmit={definirPresupuestoSubmit}>
                <input
                    type="number"
                    className="form-control mb-3 mt-3"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="btn btn-primary w-100"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
            
    )
}

Pregunta.propTypes = {
    guardarPresupuesto : PropTypes.func.isRequired,
    guardarRestante : PropTypes.func.isRequired,
    actulizarPregunta : PropTypes.func.isRequired
  }

export default Pregunta
