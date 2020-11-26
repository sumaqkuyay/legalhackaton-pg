import React, { Component }from 'react';
import StepsMenu from '../components/StepsMenu';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPreference:'',
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
    const {step} = this.state;
    return (
      <header className="head-waiter">
       <StepsMenu
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          step={step}
       />
      </header>
    );
  }
}
export default Home;
