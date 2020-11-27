import React from 'react';
import { Modal } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const CreateFiscalYear = ({showStatus, toogleCreatefiscalYearModal, onChangefiscalYear, addNewfiscalYear}) => {
  return (
    <div>
      <div className="">
        <button type="button" className="material-button" onClick={toogleCreatefiscalYearModal}>CREAR ENTRENAMIENTO ANUAL</button>
      </div>
      <Modal show={showStatus} onHide={toogleCreatefiscalYearModal}>
        <Modal.Header closeButton>
          <Modal.Title>Entrenamiento Anual Nuevo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input name="name" className="form-control" placeholder="Título de Materia" onChange={onChangefiscalYear} />
            <button name="publicar" type="submit" className="btn btn-primary" onClick={addNewfiscalYear}>Crear</button>
        </Modal.Body>
         
      </Modal>
    </div>
  );
};
export default CreateFiscalYear;