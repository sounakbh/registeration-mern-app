import React, { Component } from 'react';
import {Button, ProgressBar} from 'react-bootstrap';
import './css/userDetails.css';

export default class UserDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleChange } = this.props;

    return(
      <div className="container">
        {/*Taking input of firstname, lastName, mobile, and email and updating the state of the parent component*/}
        <div className="form-group">
          <div style={{textAlign: "center"}} className="homepageHeading">CloveMeet <span style={{color: "#228B22"}}>2.0</span></div><br/>
          <ProgressBar now={33} variant="success" label={"33%"}/>
          <br/>
          <input
              type="text"
              placeholder="First Name"
              required
              className="form-control"
              onChange={handleChange('firstName')}
          />
        </div>

        <div className="form-group">
          <input
              type="text"
              required
              className="form-control"
              placeholder="Last Name"
              onChange={handleChange('lastName')}
          />
        </div>

        <div className="form-group">
          <input
              type="text"
              required
              className="form-control"
              placeholder="Phone No."
              onChange={handleChange('mobile')}
          />
        </div>

        <div className="form-group">
          <input
              type="text"
              required
              className="form-control"
              placeholder="E-mail"
              onChange={handleChange('email')}
          />
        </div>

        <div className="btnspace">
          <Button variant="primary"
                onClick={this.continue}
              >Continue
          </Button>
        </div>

      </div>
    )
  }
}
