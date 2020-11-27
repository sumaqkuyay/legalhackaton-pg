import React, { Component } from 'react';
import StepsMenu from '../components/StepsMenu';



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
    return (
      <div className="unaprueba">
        <aside className="sidebar">Temis, tu asistente legal</aside>
        <StepsMenu
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            step={step}
        />
      </div>
    );
  }
}

export default Home;
