import React, { Component } from 'react';
import migajita from '../images/migajita.svg';

export class CreatedTraining extends Component {
    render() {
        return (
            <div className="unaprueba">
                <aside className="sidebar">Temis, tu asistente legal</aside>
            <div className="materials">
                <div className="materials-card">
                    <div className="materials-card-container">
                        <div className="materials-card-header">
                            <p>Antitrust</p>
                            <img src={migajita} className="material-card-back-button" alt="icon-back-form" />
                            <p className="text-selected">Hub&Spoke</p>
                        </div>
                        <div className="materials-card-body">
                            <div className="materials-card-information">
                                <div className="materials-card-body-text">
                                    <p className="h1-style">Hub&Spoke</p>
                                    <p className="h3-style">TODOS LOS ENTRENAMIENTOS</p>
                                </div>
                                <div className="adition-button-container">
                                    <button type="button" className="material-button">Crear Entrenamiento Anual</button>
                                </div>
                            </div>
                            <div className="created-training-information">
                                <p className="h2-style">Año</p>
                                <p className="h2-style">Número de participantes pendientes</p>
                            </div>
                            <div className="materials-card-materia-div">
                                <div className="created-training-little-card">
                                    <p className="h2-style">FY-1920</p>
                                    <p className="h2-style">0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
      }
    }
export default CreatedTraining;