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
        <>
          <aside className="sidebar">Temis, tu asistente legal</aside>
          <MaterialCard/>
        </>
      );
    }
  }
  
  export default Materials;
  