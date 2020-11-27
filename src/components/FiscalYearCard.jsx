import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateFiscalYear from '../components/CreateFiscalYear';
import migajita from '../images/migajita.svg';

export class FiscalYearCard extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { showStatus, toogleCreatefiscalYearModal, onChangefiscalYear, addNewfiscalYear, fiscalYearList } = this.props;
    
    return(

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
                <CreateFiscalYear
                  showStatus={showStatus}
                  toogleCreatefiscalYearModal={toogleCreatefiscalYearModal}
                  onChangefiscalYear={onChangefiscalYear}
                  addNewfiscalYear={addNewfiscalYear}
                />
                {/* <button className="material-button" type="button">
                  <img src={fileicon} className="" alt="icon-back-form" />
                  <p className="txt-btn-form">CREAR MATERIA</p>
                </button> */}
              </div>
              </div>
              <div className="created-training-information">
                  <p className="new-training-style1">Año</p>
                  <p className="new-training-h2-style2">Número de participantes pendientes</p>
              </div>
              <div className="fiscal-year-card-div">
                
                { // eslint-disable-next-line react/prop-types
                fiscalYearList.map((element) => {
                    return (
                      <button className="created-training-little-card" key={element.id}>
                        <Link to="/fiscalYear" className="created-training-little-text">
                          <p className="created-training-yearname">{element.name}</p>
                          <p className="created-training-people">0</p>
                        </Link>  
                      </button>
                      );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default FiscalYearCard;