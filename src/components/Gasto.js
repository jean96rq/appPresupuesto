import React from 'react'
import PropTypes from 'prop-types'

function Gasto({gasto}) {
    return (
            <li className="list-item border-bottom list-unstyled mb-2 mt-2">
                <p>
                    {gasto.nombre}
                    <span className="float-end text-success rounded">S/.{gasto.cantidad}</span>
                </p>
            </li>
    )
}

Gasto.propTypes = {
    gasto : PropTypes.object.isRequired
  }

export default Gasto
