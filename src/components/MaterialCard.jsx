import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateMaterial from '../components/CreateMaterial';
import migajita from '../images/migajita.svg';
import materialfile from '../images/material-file.svg';

export class MaterialCard extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { showStatus, toogleCreateMaterialModal, onChangeMaterial, addNewMaterial, materialList } = this.props;
    
    return(

      <div className="materials">
        <div className="materials-card">
          <div className="materials-card-container">
            <div className="materials-card-header">
            <Link to="/home">
              <p>ENTRENAMIENTOS</p>
            </Link>
              <div className="materials-card-header-little-section">
                <img src={migajita} className="material-card-back-button" alt="icon-back-form" />
                <p className="text-selected">ENTRENAMIENTOS CORPORATIVOS</p>
              </div>
            </div>
            <div className="materials-card-body">
              <div className="materials-card-information">
              <div className="materials-card-body-text">
                <p className="h1-style">Materias de Entrenamientos Corporativos</p>
                <p className="h2-style">En esta sección, puedes crear materias nuevas en caso necesites. 
                  Además, soy tan flexible, que puedes agregar todas las que necesitas. </p>
              </div>
              <div className="adition-button-container">
                <CreateMaterial
                  showStatus={showStatus}
                  toogleCreateMaterialModal={toogleCreateMaterialModal}
                  onChangeMaterial={onChangeMaterial}
                  addNewMaterial={addNewMaterial}
                />
                {/* <button className="material-button" type="button">
                  <img src={fileicon} className="" alt="icon-back-form" />
                  <p className="txt-btn-form">CREAR MATERIA</p>
                </button> */}
              </div>
              </div>
              <div className="materials-card-materia-div">
                
                { // eslint-disable-next-line react/prop-types
                materialList.map((element) => {
                    return (
                    <button className="material" key={element.id} >
                      <Link to="/submaterials">
                        <img src={materialfile} className="" alt="" />{element.name}
                      </Link>
                      </button>);
                  
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default MaterialCard;