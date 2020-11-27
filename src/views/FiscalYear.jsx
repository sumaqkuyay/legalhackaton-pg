import React from 'react';
import IconImport from "../images/icon_import.png"
import IconExport from "../images/icon_export.png"
import "../sass/styleComponents/_FiscalYear.scss"
import { Redirect } from 'react-router-dom'
import * as XLSX from "xlsx";
import TrainerMaterials from "../components/TrainerMaterials"

//const result = excelToJson;

class FiscalYear extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            selectedFile: null,
            selectedFileForm: null,
            jsonData: null,
            jsonForm: null,
            absent: []
        };

        this.onFileChange = this.onFileChange.bind(this);
        this.onFileChangeForm = this.onFileChangeForm.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
        this.readFile = this.readFile.bind(this);
        this.Filterassistants = this.Filterassistants.bind(this);
    }

    onFileChange(event) {
        this.setState({ selectedFile: event.target.files[0] });
    }
    onFileChangeForm(event) {
        this.setState({ selectedFileForm: event.target.files[0] });
    }

    onFileUpload() {

        let f1 = this.state.selectedFile;
        let f2 = this.state.selectedFileForm;
        this.readFile(f1, "requeridos");
        this.readFile(f2, "asistentes");

    }


    readFile(file, fileType) {

        const reader = new FileReader();
        reader.onload = (evt) => {

            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            if (fileType == "requeridos") {
                this.setState({ jsonData: this.convertToJson(data) })
            }
            if (fileType == "asistentes") {
                this.setState({ jsonForm: this.convertToJson(data) })
            }
            if (this.state.jsonData && this.state.jsonForm) {
                this.setState({ absent: this.Filterassistants(this.state.jsonData, this.state.jsonForm) });
            }

        };
        reader.readAsBinaryString(file);

    }

    Filterassistants(requeridos, asistidos) {
        let absent = [];
        for (let item1 = 0; item1 < requeridos.length; item1++) {
            let emailreq = requeridos[item1].Email;
            let encontrado = false;
            for (let item2 = 0; item2 < asistidos.length; item2++) {
                let emailasist = asistidos[item2].Email;
                if (emailreq == emailasist) {
                    encontrado = true
                }
            }
            if (encontrado == false) {
                absent.push(requeridos[item1])
            }
        }
        return absent;
    }

    convertToJson(csv) {
        let lines = csv.split("\n");
        let result = [];
        let headers = lines[0].split(",");
        for (let i = 1; i < lines.length; i++) {
            let obj = {};
            let currentline = lines[i].split(",");
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        //return JSON.stringify(result);
        return result;
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="Background-body" >
                <div className="Info-container">
                    <div className="Bread-crumb">
                        Antitrust - FY1920
                    </div>
                    <div>
                        <TrainerMaterials />
                    </div>
                    <div className="Buttons-excel-container">
                        <div className="Excel-upload">
                            <img src={IconImport} alt="" />
                            <label htmlFor="fileToUpload1" className="upload"> PARTICIPANTES <br /> REQUERIDOS</label>
                            <input type="file" className="File-to-upload" style={{ visibility: 'hidden' }} name="fileToUpload" id="fileToUpload1" onChange={this.onFileChange} />
                        </div>
                        <div className="Excel-upload">
                            <img src={IconImport} alt="" />
                            <label htmlFor="fileToUpload2" className="upload"> CARGAR LISTA DE <br /> ASISTENTES</label>
                            <input type="file" className="File-to-upload" style={{ visibility: 'hidden' }} name="fileToUpload" id="fileToUpload2" onChange={this.onFileChangeForm} />
                        </div>
                        <div className="Excel-convert-to-json">
                            <img src={IconExport} alt="" />
                            <label htmlFor="submit" >DESCARGAR LISTA <br /> DE PENDIENTES</label>
                            <input type="submit" style={{ visibility: 'hidden' }} name="submit" id="submit" onClick={this.onFileUpload} />
                        </div>
                    </div>
                    <div className="Title-pendientes">
                        <h1>TODOS LOS PENDIENTES</h1>
                        <hr />
                    </div>
                    <div>
                        <ul>
                            <li>Apellido</li>
                            <li>Nombre</li>
                            <li>Correo</li>
                            <li>Función</li>
                            <li>Área</li>
                        </ul>
                    </div>
                    <div className="Pending-list-box">
                        {
                            this.state.absent.map(item => (
                                <div key={item.Email} className="Items-container">
                                    <div className="Items-list">
                                        <div className="Items-info">
                                            <td>{item.Apellido}</td>
                                        </div>
                                        <div className="Items-info">
                                            <td>{item.Nombre}</td>
                                        </div>
                                        <div className="Items-info">
                                            <td>{item.Email}</td>
                                        </div>
                                        <div className="Items-info">
                                            <td></td>
                                        </div>
                                        <div className="Items-info">
                                            <td></td>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

    fiscal() {
        this.setState({ redirect: "/fiscalYear" })
    }

}
export default FiscalYear;