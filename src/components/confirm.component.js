import React, { Component } from 'react';
import {Button, ProgressBar} from 'react-bootstrap';
import './css/confirm.css'
import axios from 'axios';

export default class ConfirmPage extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    const { firstName, lastName, mobile, email, regType, numTickets } = this.props.values;
    const user = {
      firstName,
      lastName,
      mobile,
      email,
      regType,
      numTickets
    }
    console.log(user);
    if(firstName !== "" && lastName !== "" && mobile !== "" && email !== "" && regType !== "" && numTickets !== "") {
      axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))
      this.props.nextStep();
    }
    else {
      alert("Missing details, please fill all the fields!");
    }
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
        <div className="form-group">
          <ProgressBar now={100} label={"100%"}/>
          <br/>
          <h1 className="heading" style={{marginTop: "5%"}}>Confirm your Details</h1>
          <div className="detail">First Name : {firstName}</div>
          <div className="detail">Last Name : {lastName}</div>
          <div className="detail">Mobile : {mobile}</div>
          <div className="detail">Email : {email}</div>
          <div className="detail">Registration : {regType}</div>
          <div className="detail" style={{marginBottom: "5%"}}>Number of Tickets : {numTickets}</div>
          <div className="btnspace">
            <Button variant="danger"
                  onClick={this.back}
                >Back</Button> &nbsp;
            <Button variant="primary"
                  onClick={this.continue}
                >Confirm</Button>
          </div>
        </div>
      </div>
    )
  }
}
