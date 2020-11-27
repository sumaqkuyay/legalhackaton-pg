import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                            <Link to="/submaterials">
                                <p>ANTITRUST</p>
                            </Link>
                            <div className="materials-card-header-little-section">
                                <img src={migajita} className="material-card-back-button" alt="icon-back-form" />
                                <p className="text-selected">HUB&SPOKE</p>
                            </div>
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
                                <div className="year-div">Año</div>
                                <div className="number-participants-div">Número de participantes pendientes</div>
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