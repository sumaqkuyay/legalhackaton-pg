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
            jsonData: null
        };

        this.onFileChange = this.onFileChange.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
    }

    onFileChange(event) {
        this.setState({ selectedFile: event.target.files[0] });
    }

    onFileUpload() {
        var f = this.state.selectedFile;
        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: "binary" });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            console.log(this.convertToJson(data)); // shows data in json format
            this.setState({ jsonData: this.convertToJson(data) });
        };
        reader.readAsBinaryString(f);
    }

    convertToJson(csv) {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return JSON.stringify(result);
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
                            <label htmlFor="fileToUpload" className="upload"> PARTICIPANTES <br /> REQUERIDOS</label>
                            <input type="file" className="File-to-upload" style={{ visibility: 'hidden' }} name="fileToUpload" id="fileToUpload" onChange={this.onFileChange} />
                        </div>
                        <div className="Excel-upload">
                            <img src={IconImport} alt="" />
                            <label htmlFor="fileToUpload" className="upload"> CARGAR LISTA DE <br /> ASISTENTES</label>
                            <input type="file" className="File-to-upload" style={{ visibility: 'hidden' }} name="fileToUpload" id="fileToUpload" onChange={this.onFileChange} />
                        </div>
                        <div className="Excel-convert-to-json">
                            <img src={IconExport} alt="" />
                            <label htmlFor="submit" >DESCARGAR LISTA <br /> DE PENDIENTES</label>
                            <input type="submit" style={{ visibility: 'hidden' }} name="submit" id="submit" onClick={this.onFileUpload} />
                        </div>
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