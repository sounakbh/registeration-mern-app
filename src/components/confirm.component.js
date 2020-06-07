import React, { Component } from 'react';
import {Button, ProgressBar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import './css/confirm.css'
import axios from 'axios';

export default class ConfirmPage extends Component {

  continue = e => {
    e.preventDefault();

    //submitting all the details input by the user to the databse
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

    //checking whether any field is left blank
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
          <div style={{textAlign: "center"}} className="homepageHeading">CloveMeet <span style={{color: "#228B22"}}>2.0</span></div><br/>
          <ProgressBar variant="success" now={100} label={"100%"}/>
          <br/>
          <div className="detail">First Name : {firstName}</div>
          <div className="detail">Last Name : {lastName}</div>
          <div className="detail">Mobile : {mobile}</div>
          <div className="detail">Email : {email}</div>
          <div className="detail">Registration : {regType}</div>
          <div className="detail" style={{marginBottom: "7%"}}>Number of Tickets : {numTickets}</div>

          <div className="btnspace">
            <Button
              variant="danger"
              onClick={this.back}
            >Back
            </Button> &nbsp;
            <Button
              variant="primary"
              onClick={this.continue}
            >Confirm
            </Button>
          </div>

        </div>
      </div>
    )
  }
}
