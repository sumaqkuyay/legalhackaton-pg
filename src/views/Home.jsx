import React, { Component } from 'react';
import StepsMenu from '../components/StepsMenu';
import { Redirect } from 'react-router-dom'


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      newPreference: '',
      changeState: true,
      step: 1,
    };
  }

  nextStep = () => {
    let { step } = this.state;
    step = step + 1;
    this.setState({ step });
  };

  prevStep = () => {
    let { step } = this.state;
    step = step - 1;
    this.setState({ step });
  };
  render() {
    const { step } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <header className="head-waiter">
        <StepsMenu
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          step={step}
        />

        <button path="/fiscalYear" onClick={() => this.fiscal()}>Ir Año fiscal</button>
      </header>
    );
  }

  fiscal() {
    this.setState({ redirect: "/fiscalYear" })
  }
}


export default Home;
