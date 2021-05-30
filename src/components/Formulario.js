import React, { useState } from 'react'
import Cerror from './Cerror';
import shortid from 'shortid';
import PropTypes from 'prop-types'


function Formulario({guardarGasto, guardarCrearGasto}) {
    const [nombre, guardarNombre] = useState('');
    const [cantidad , guardarCantidad] = useState(0);

    const [error, guardarError] = useState(false)
    

    const enviarGasto = e=>{
        e.preventDefault();
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false)
        const gasto = {
            nombre,
            cantidad,
            id : shortid.generate()
        }
        guardarGasto(gasto)
        guardarCrearGasto(true)
        guardarNombre('')
        guardarCantidad(0)
    }

    return (
        <form onSubmit={enviarGasto} className ="mb-3 mt-1">
            <h4 className="display-6">Agrega tus gastos aquí</h4>
            {error ? <Cerror mensaje = "Los campos son obligatorios o presupuesto incorrecto"/> :null}
            <div className="mb-3">
                <label
                    className="form-label"
                >Nombre del gasto</label>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Ej. Comida"
                    value ={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label
                    className="form-label"
                >Cantidad de gasto</label>
                <input
                    type="number"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder = {0}
                    value = {cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value,10))}
                />
            </div>
            <input
                type="submit"
                className="btn btn-primary w-100"
                value="Agregar gasto"
            />
        </form>
    )
}

Formulario.propTypes = {
    guardarGasto : PropTypes.func.isRequired,
    guardarCrearGasto : PropTypes.func.isRequired
  }

export default Formulario
