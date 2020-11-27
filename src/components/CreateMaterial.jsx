import React from 'react';
import { Modal } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const CreateMaterial = ({showStatus, toogleCreateMaterialModal, onChangeMaterial, addNewMaterial}) => {
  return (
    <div>
      <div className="">
        <button type="button" className="material-button" onClick={toogleCreateMaterialModal}>CREAR MATERIA</button>
      </div>
      <Modal show={showStatus} onHide={toogleCreateMaterialModal}>
        <Modal.Header closeButton>
          <Modal.Title>Materia Nueva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input name="name" className="form-control" placeholder="Título de Materia" onChange={onChangeMaterial} />
            <button name="publicar" type="submit" className="btn btn-primary" onClick={addNewMaterial}>Crear</button>
        </Modal.Body>
         
      </Modal>
    </div>
  );
};
export default CreateMaterial;