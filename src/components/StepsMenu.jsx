import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import btnBack from '../images/btn_back.png';

export class StepsMenu extends Component {

  render() {

    // eslint-disable-next-line react/prop-types
    const { nextStep, prevStep, step } = this.props;
    return (
      <>
        <div className="home-card" hidden={step === 1 ? false : true }>
          <div className="">
            <p className="h1-style">Hola, soy Temis :) ¡Siempre dispuesta a ayudarte!</p>
            <p className="h2-style">Selecciona una entidad legal.</p>
          </div>
          <div className="button-div">
            <button className="home-button" type="button" onClick={nextStep} >
              <p className="txt-btn-form">398-P&G PERÚ</p>
            </button>
            <button className="home-button" type="button" >
              <p className="txt-btn-form">785-P&G INDUSTRIAL</p>
            </button>
          </div>
          <br />
        </div>

        <div className="home-card" hidden={step === 2 ? false : true }>
          <div className="">
            <button className="btn btn-danger btn-form" onClick={prevStep}>
              <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
            </button>
            <p className="txt-btn-form">P&G PERÚ</p>
          </div>
          <div className="App">
            <p className="h1-style">Ahora elige el tipo de responsabilidad a cumplir.</p>
            <p className="h2-style">Selecciona un tipo de responsabilidad con la que quieres que te ayude.</p>
          </div>
          <div className="button-div">
            <button className="home-button" type="button" onClick={nextStep} >
              <p className="txt-btn-form">Entrenamientos</p>
            </button>
            <button className="home-button" type="button" >
              <p className="txt-btn-form">Obligaciones</p>
            </button>
          </div>
        </div>

        <div className="home-card" hidden={step === 3 ? false : true }>
          <div className="">
            <button className="btn btn-danger btn-form" onClick={prevStep}>
              <img src={btnBack} className="icon-back-form" alt="icon-back-form" />
            </button>
            <p className="txt-btn-form">ENTRENAMIENTOS</p>
          </div>
          <div className="App">
            <p className="h1-style">¡Perfecto! Ahora indica el tipo de entrenamiento </p>
            <p className="h2-style">Escoge un tipo de entrenamiento y continuemos. :D</p>
          </div>
          <div className="button-div">
            <Link to="/materials">
            <button className="home-button" type="button" onClick={nextStep} >
              <p className="txt-btn-form">ENTRENAMIENTO CORPORATIVO</p>
            </button>
            </Link>
            <button className="home-button" type="button" >
              <p className="txt-btn-form">ENTRENAMIENTO LEGAL</p>
            </button>
          </div>
        </div> 
      </>
    );
  }
}
export default StepsMenu;