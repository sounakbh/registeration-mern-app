import React, { Component } from 'react';
import UserDetails from './userDetails.component.js';
import TicketsPage from './tickets.component.js';
import ConfirmPage from './confirm.component.js';
import SuccessPage from './success.component.js';

export default class CreateUser extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    mobile: 0,
    email: '',
    regType: 'Self',
    numTickets: 1
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, mobile, email, regType, numTickets } = this.state;
    const values = { firstName, lastName, mobile, email, regType, numTickets };
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <TicketsPage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ConfirmPage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <SuccessPage />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}
