import React, { Component } from 'react';
import axios from 'axios';

export default class ConfirmPage extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    const user = {
      firstName: this.props.values.firstName,
      lastName: this.props.values.lastName,
      mobile: this.props.values.mobile,
      email: this.props.values.email,
      regType: this.props.values.regType,
      numTickets: this.props.values.numTickets
    }
    console.log(user);
    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data))
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, mobile, email, regType, numTickets }
    } = this.props;
    return(
      <div>
        <h1>Confirmation Page</h1>
        <div>First Name : {firstName}</div>
        <div>Last Name : {lastName}</div>
        <div>Mobile : {mobile}</div>
        <div>Email : {email}</div>
        <div>Registration : {regType}</div>
        <div>Number of Tickets : {numTickets}</div>
        <button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</button>

        <button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</button>
      </div>
    )
  }
}
