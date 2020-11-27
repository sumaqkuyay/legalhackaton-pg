import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SubMaterialCard from '../components/SubMaterialCard';
import {getSubMaterials, addSubMaterials} from '../controller/firestores';


export class SubMaterials extends Component {
    constructor(props) {
      super(props);
      this.state = {
        submaterialList:[],
        submaterial: {
          name: '',
          // subMaterials:[],
        },
        createsubMaterialModal: false,
        changeState: true,
      };
    }
    componentDidMount() {
      this.loadSubMaterial();
    }

    loadSubMaterial =()=>{
      getSubMaterials().then((preferences)=>{
        let submaterialList=[];
        preferences.map((item)=>{ 
          submaterialList.push(item);
        });
        this.setState({submaterialList: [...submaterialList]});
      }).catch(()=>{
        console.log('fallo');
      });
    }


    addNewSubMaterial = e => {
      e.preventDefault();
      addSubMaterials(this.state.submaterial).then(()=>{
        this.loadSubMaterial();
      });
      this.toogleCreateSubMaterialModal();
    }

    toogleCreateSubMaterialModal = () => {
      this.setState({createsubMaterialModal:!this.state.createsubMaterialModal})
    }
    onChangeSubMaterial = e=>{
      const { submaterial } = this.state;
      submaterial[e.target.name] = e.target.value;
      this.setState({ submaterial: { ...submaterial } });
    }
   
    render() {
        
      return (
        <div className="unaprueba">
          <aside className="sidebar">Temis, tu asistente legal</aside>
          <SubMaterialCard 
            showStatus={this.state.createsubMaterialModal} 
            toogleCreateSubMaterialModal={this.toogleCreateSubMaterialModal}
            onChangeSubMaterial={this.onChangeSubMaterial} 
            addNewSubMaterial={this.addNewSubMaterial}
            submaterialList={this.state.submaterialList}
          />
        </div>
      );
    }
  }

  export default SubMaterials;