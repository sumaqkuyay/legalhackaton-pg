import React, { Component } from 'react';
import migajita from '../images/migajita.svg';
import fileicon from '../images/file-icon.svg';

export class MaterialCard extends Component {
  render() {
    return(
      <div className="materials">
        <div className="materials-card">
          <div className="materials-card-container">
            <div className="materials-card-header">
              <p>ENTRENAMIENTOS</p>
              <img src={migajita} className="" alt="icon-back-form" />
              <p className="text-selected">ENTRENAMIENTOS COORPORATIVOS</p>
            </div>
            <div className="materials-card-body">
              <div className="materials-card-information">
              <div className="materials-card-body-text">
                <p className="h1-style">Materias de Entrenamientos Corporativos</p>
                <p className="h2-style">En esta sección, puedes crear materias nuevas en caso necesites. 
                  Además, soy tan flexible, que puedes agregar todas las que necesitas. </p>
              </div>
              <div className="adition-button-container">
                <button className="material-button" type="button">
                  <img src={fileicon} className="" alt="icon-back-form" />
                  <p className="button-material-text">CREAR MATERIA</p>
                </button>
              </div>
              </div>
              <div className="materials-card-materia-div">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default MaterialCard;