import React from 'react';
import historia from '../../img/historia.png'

const Historia = () => {
  return (
    <div className="container mt-5">
        <h2>Nuestra Historia</h2>
        <h3>Primeros logros de la UCTHP</h3>
        <div className="row mt-5">
          <img src={historia} className="fluid-img" alt="nuestra historia" />
        </div>
    </div>
  )
}

export default Historia