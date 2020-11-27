import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MaterialCard from '../components/MaterialCard';
import {getMaterials, addMaterials} from '../controller/firestores';


export class Materials extends Component {
    constructor(props) {
      super(props);
      this.state = {
        materialList:[],
        material: {
          name: '',
          // subMaterials:[],
        },
        createMaterialModal: false,
        changeState: true,
      };
    }
    componentDidMount() {
      this.loadMaterial();
    }

    loadMaterial =()=>{
      getMaterials().then((preferences)=>{
        let materialList=[];
        preferences.map((item)=>{ 
          materialList.push(item);
        });
        this.setState({materialList: [...materialList]});
      }).catch(()=>{
        console.log('fallo');
      });
    }


    addNewMaterial = e => {
      e.preventDefault();
      addMaterials(this.state.material).then(()=>{
        this.loadMaterial();
      });
      this.toogleCreateMaterialModal();
    }

    toogleCreateMaterialModal = () => {
      this.setState({createMaterialModal:!this.state.createMaterialModal})
    }
    onChangeMaterial = e=>{
      const { material } = this.state;
      material[e.target.name] = e.target.value;
      this.setState({ material: { ...material } });
    }
   
    render() {
        
      return (
        <div className="unaprueba">
          <aside className="sidebar">Temis, tu asistente legal</aside>
          <MaterialCard 
            showStatus={this.state.createMaterialModal} 
            toogleCreateMaterialModal={this.toogleCreateMaterialModal}
            onChangeMaterial={this.onChangeMaterial} 
            addNewMaterial={this.addNewMaterial}
            materialList={this.state.materialList}
          />
        </div>
      );
    }
  }
   /*<div className="unaprueba">
        <aside className="sidebar">Temis, tu asistente legal</aside>
        <MaterialCard/>
        </div>*/
  export default Materials;
  