import React from 'react'

import './FlightSchedule.css';

const FlightSchedule = () => {
  return (
    <div className="content__row">
      <div className="content__row-75">
        <div className="content__reserve">
          <form action="#">
            <h1>Areodev</h1>
            <hr />
            <div className="content__row">
              <div className="content__row-50">
                <label for="salida">Origen</label>
                <select>
                  <option value="México">México</option>
                  <option value="Francia">Francia</option>
                </select>
              </div>
              <div className="content__row-50">
                <label for="salida">Destino</label>
                <select>
                  <option value="México">México</option>
                  <option value="Francia">Francia</option>
                </select>
              </div>
            </div>
            <div className="content__row">
              <div className="content__row-25">
                <label for="salida">Salida</label>
                <input type="date"></input>
              </div>
              <div className="content__row-25">
                <label for="regreso">Regreso</label>
                <input type="date"></input>
              </div>
              <div className="content__row-25">
                <label for="salida">Número de pasajeros</label>
                <input type="number" placeholder="1" />
              </div>
            </div>
            <div className="button__container">
              <button className="button__flight" disabled>Buscar vuelos</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FlightSchedule;