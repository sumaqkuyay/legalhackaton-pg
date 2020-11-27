import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateSubMaterial from '../components/CreateSubMaterial';
import migajita from '../images/migajita.svg';
import materialfile from '../images/material-file.svg';

export class SubMaterialCard extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { showStatus, toogleCreateSubMaterialModal, onChangeSubMaterial, addNewSubMaterial, submaterialList } = this.props;
    
    return(

      <div className="materials">
        <div className="materials-card">
          <div className="materials-card-container">
            <div className="materials-card-header">
            <Link to="/materials">
              <p>ENTRENAMIENTOS CORPORATIVOS</p>
            </Link>
            <div className="materials-card-header-little-section">
                <img src={migajita} className="material-card-back-button" alt="icon-back-form" />
                <p className="text-selected">ANTITRUST</p>
            </div>
            </div>
            <div className="materials-card-body">
              <div className="materials-card-information">
              <div className="materials-card-body-text">
                <p className="h1-style">Antitrust</p>
                <p className="h2-style">Crea las submaterias que necesites </p>
              </div>
              <div className="adition-button-container">
                <CreateSubMaterial
                  showStatus={showStatus}
                  toogleCreateSubMaterialModal={toogleCreateSubMaterialModal}
                  onChangeSubMaterial={onChangeSubMaterial}
                  addNewSubMaterial={addNewSubMaterial}
                />
                {/* <button className="material-button" type="button">
                  <img src={fileicon} className="" alt="icon-back-form" />
                  <p className="txt-btn-form">CREAR MATERIA</p>
                </button> */}
              </div>
              </div>
              <div className="materials-card-materia-div">
                
                { // eslint-disable-next-line react/prop-types
                submaterialList.map((element) => {
                    return (<div className="material" key={element.id}>
                      <Link to="/created-training">
                        <img src={materialfile} className="" alt="" />{element.name}
                      </Link>
                      </div>);
                  
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default SubMaterialCard;