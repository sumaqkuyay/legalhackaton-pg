import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import migajaback from '../images/migaja-back.svg';

export class StepsMenu extends Component {

  render() {
   
    // eslint-disable-next-line react/prop-types
    const { nextStep, prevStep, step } = this.props;
    return (
      <>
        <div className="first-card" hidden={step === 1 ? false : true }>
          <div className="home-card">
            <div className="home-card-container">
            <p className="h1-style">Hola, soy Temis :) ¡Siempre dispuesta a ayudarte!</p>
            <p className="h2-style">Selecciona una de estas dos Entidades Legales 
            para realizar el Programa de Cumplimiento respectivo.</p>
            <div className="button-div">
              <button className="home-button" type="button" onClick={nextStep} >
                <p className="txt-btn-form">398-P&G PERÚ</p>
              </button>
              <button className="home-button" type="button" >
                <p className="txt-btn-form">785-P&G INDUSTRIAL</p>
              </button>
            </div>
            </div>
          </div>
          <br />
        </div>
    
        <div className="first-card" hidden={step === 2 ? false : true }>
          <div className="home-card">
            <div className="home-header">
              <button className="icon-back" onClick={prevStep}>
                <img src={migajaback} className="" alt="icon-back-form" />
              </button>
              <p className="h2-style">P&G PERÚ</p>
            </div>
            <div className="home-card-container">
            <p className="h1-style">Ahora elije el tipo de responsabilidad a cumplir.</p>
            <p className="h2-style">Selecciona un tipo de responsabilidad en el que quieres que te ayude.</p>
            <div className="button-div">
              <button className="home-button" type="button" onClick={nextStep} >
                <p className="txt-btn-form">ENTRENAMIENTOS</p>
              </button>
              <button className="home-button" type="button" >
                <p className="txt-btn-form">OBLIGACIONES</p>
              </button>
              </div>
            </div>
          </div>
        </div>

        <div className="first-card" hidden={step === 3 ? false : true }>
        <div className="home-card">
        <div className="home-header">
            <button className="icon-back" onClick={prevStep}>
              <img src={migajaback} className="" alt="icon-back-form" />
            </button>
            <p className="h2-style">ENTRENAMIENTOS</p>
          </div>
          <div className="home-card-container">
            <p className="h1-style">¡Perfecto! Ahora indica el tipo de entrenamiento </p>
            <p className="h2-style">Escoge un tipo de entrenamiento y continuemos. :D</p>
          <div className="button-div">
              <Link to="/materials">
              <button className="home-button" type="button" onClick={nextStep} >
                <p className="txt-btn-form">ENTRENAMIENTO COORPORATIVO</p>
              </button>
              </Link>
              <button className="home-button" type="button" >
                <p className="txt-btn-form">ENTRENAMIENTO LEGAL</p>
              </button>
              </div>
            </div>
          </div>
        </div> 
      </>
    );
  }
}
export default StepsMenu;
