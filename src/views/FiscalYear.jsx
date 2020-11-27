import React from 'react';
import "../sass/styleComponents/_FiscalYear.scss"
import { Redirect } from 'react-router-dom'
import * as XLSX from "xlsx";

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
                <input type="file" name="fileToUpload" id="fileToUpload" onChange={this.onFileChange} />
                <input type="submit" value="Upload Image" name="submit" onClick={this.onFileUpload} />
            </div>
        )
    }

    fiscal() {
        this.setState({ redirect: "/fiscalYear" })
    }

}
export default FiscalYear;