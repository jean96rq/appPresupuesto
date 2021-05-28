import React, { Fragment } from 'react'
import {revisarPresupuesto} from '../helpers' 
import PropTypes from 'prop-types'

function ControlPresupuesto({presupuesto,restante}) {
    return (
        <Fragment>
            <div className="alert alert-primary border-0" role="alert">
                Presupuesto : S/. {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto,restante)} role="alert">
                Restante : S/. {restante}
            </div>
        </Fragment>
    )
}

ControlPresupuesto.propTypes = {
    presupuesto : PropTypes.number.isRequired,
    restante : PropTypes.number.isRequired,
  }

export default ControlPresupuesto
