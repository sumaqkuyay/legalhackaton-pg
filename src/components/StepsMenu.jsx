import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import migaja from '../images/migaja-back.svg';

export class StepsMenu extends Component {

  render() {

    // eslint-disable-next-line react/prop-types
    const { nextStep, prevStep, step } = this.props;
    return (
      <>
        <div className="home-card" hidden={step === 1 ? false : true }>
          <div className="home-card-text">
            <p className="h1-style">Hola, soy Temis :) ¡Siempre dispuesta a ayudarte!</p>
            <p className="h2-style">Selecciona una entidad legal.</p>
          </div>
          <div className="button-div">
            <button className="home-button" type="button" onClick={nextStep} >
              <p className="big-button-style">398-P&G PERÚ</p>
            </button>
            <button className="home-button" type="button" >
              <p className="big-button-style">785-P&G INDUSTRIAL</p>
            </button>
          </div>
          <br />
        </div>

        <div className="home-card" hidden={step === 2 ? false : true }>
          <div className="home-card-text">
          <div className="home-back-buttons">
            <button className="button-general" onClick={prevStep}>
              <img src={migaja} className="icon-back-form" alt="icon-back-form" />
            </button>
            <p className="home-unique-text">P&G PERÚ</p>
          </div>
            <p className="h1-style">Ahora elige el tipo de responsabilidad a cumplir.</p>
            <p className="h2-style">Selecciona un tipo de responsabilidad con la que quieres que te ayude.</p>
          </div>
          <div className="button-div">
            <button className="home-button" type="button" onClick={nextStep} >
              <p className="big-button-style">ENTRENAMIENTOS</p>
            </button>
            <button className="home-button" type="button" >
              <p className="big-button-style">OBLIGACIONES</p>
            </button>
          </div>
        </div>

        <div className="home-card" hidden={step === 3 ? false : true }>
          <div className="home-card-text">
          <div className="home-back-buttons-2-version">
            <button className="button-general" onClick={prevStep}>
              <img src={migaja} className="icon-back-form" alt="icon-back-form" />
            </button>
            <p className="home-unique-text">ENTRENAMIENTOS</p>
          </div>
            <p className="h1-style">¡Perfecto! Ahora indica el tipo de entrenamiento </p>
            <p className="h2-style">Escoge un tipo de entrenamiento y continuemos. :D</p>
          </div>
          <div className="button-div">
            <Link to="/materials">
            <button className="home-button" type="button" onClick={nextStep} >
              <p className="big-button-style">ENTRENAMIENTO CORPORATIVO</p>
            </button>
            </Link>
            <button className="home-button" type="button" >
              <p className="big-button-style">ENTRENAMIENTO LEGAL</p>
            </button>
          </div>
        </div> 
      </>
    );
  }
}
export default StepsMenu;