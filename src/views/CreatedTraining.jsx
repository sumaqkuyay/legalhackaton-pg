import React, { Component } from 'react';
import FiscalYearCard from '../components/FiscalYearCard';
import {addFiscalYears,getFiscalYears} from '../controller/firestores';

export class CreatedTraining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fiscalYearList:[],
      fiscalYear: {
        name: '',
        // subMaterials:[],
      },
      createfiscalYearModal: false,
      changeState: true,
    };
  }
  componentDidMount() {
    this.loadfiscalYear();
  }

  loadfiscalYear =()=>{
    getFiscalYears().then((preferences)=>{
      let fiscalYearList=[];
      preferences.map((item)=>{ 
        fiscalYearList.push(item);
      });
      this.setState({fiscalYearList: [...fiscalYearList]});
    }).catch(()=>{
      console.log('fallo');
    });
  }

  addNewfiscalYear = e => {
    e.preventDefault();
    addFiscalYears(this.state.fiscalYear).then(()=>{
      this.loadfiscalYear();
    });
    this.toogleCreatefiscalYearModal();
  }

  toogleCreatefiscalYearModal = () => {
    this.setState({createfiscalYearModal:!this.state.createfiscalYearModal})
  }

  onChangefiscalYear = e=>{
    const { fiscalYear } = this.state;
    fiscalYear[e.target.name] = e.target.value;
    this.setState({ fiscalYear: { ...fiscalYear } });
  }

    render() {
      return (
        <div className="unaprueba">
          <aside className="sidebar">Temis, tu asistente legal</aside>
          <FiscalYearCard 
            showStatus={this.state.createfiscalYearModal} 
            toogleCreatefiscalYearModal={this.toogleCreatefiscalYearModal}
            onChangefiscalYear={this.onChangefiscalYear} 
            addNewfiscalYear={this.addNewfiscalYear}
            fiscalYearList={this.state.fiscalYearList}
          />
        </div>
      );
    }
  }
export default CreatedTraining;
