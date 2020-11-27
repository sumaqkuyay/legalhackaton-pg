import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MaterialCard from '../components/MaterialCard';


export class Materials extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newPreference:'',
        changeState: true,
      };
    }

    render() {
        
      return (
        <div className="unaprueba">
          <aside className="sidebar">Temis, tu asistente legal</aside>
          <MaterialCard/>
        </div>
      );
    }
  }
  
  export default Materials;
  