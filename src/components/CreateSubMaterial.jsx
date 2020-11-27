import React from 'react';
import { Modal } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const CreateSubMaterial = ({showStatus, toogleCreateSubMaterialModal, onChangeSubMaterial, addNewSubMaterial}) => {
  return (
    <div>
      <div className="">
        <button type="button" className="material-button" onClick={toogleCreateSubMaterialModal}>Crear SubMateria</button>
      </div>
      <Modal show={showStatus} onHide={toogleCreateSubMaterialModal}>
        <Modal.Header closeButton>
          <Modal.Title>SubMateria Nueva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input name="name" className="form-control" placeholder="Título de Materia" onChange={onChangeSubMaterial} />
            <button name="publicar" type="submit" className="btn btn-primary" onClick={addNewSubMaterial}>Crear</button>
        </Modal.Body>
         
      </Modal>
    </div>
  );
};
export default CreateSubMaterial;