import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './confirm.css'
import axios from 'axios';

export default class ConfirmPage extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    const {firstName, lastName, mobile, email, regType, numTickets} = this.props.values;
    const user = {
      firstName,
      lastName,
      mobile,
      email,
      regType,
      numTickets
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
      <div className="container">
        <h1 className="heading">Confirmation Page</h1>
        <div className="detail">First Name : {firstName}</div>
        <div className="detail">Last Name : {lastName}</div>
        <div className="detail">Mobile : {mobile}</div>
        <div className="detail">Email : {email}</div>
        <div className="detail">Registration : {regType}</div>
        <div className="detail">Number of Tickets : {numTickets}</div>
        <div className="btnspace">
          <Button variant="danger"
                onClick={this.back}
              >Back</Button> &nbsp;
          <Button variant="primary"
                onClick={this.continue}
              >Confirm</Button>
        </div>
      </div>
    )
  }
}
