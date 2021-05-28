import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function Cerror({mensaje}) {
    return (
        <Fragment>
            <div className="alert alert-danger" role="alert">
              {mensaje}
            </div>
        </Fragment>
    )
}

Cerror.propTypes = {
    mensaje : PropTypes.string.isRequired
  }

export default Cerror
