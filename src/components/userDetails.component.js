import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './userDetails.css';

export default class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return(
      <div className="container">
        <div className="form-group">
          <input  type="text"
              placeholder="First Name"
              required
              className="form-control"
              onChange={handleChange('firstName')}
              />
        </div>
        <div className="form-group">
          <input  type="text"
              required
              className="form-control"
              placeholder="Last Name"
              onChange={handleChange('lastName')}
              />
        </div>
        <div className="form-group">
          <input  type="text"
              required
              className="form-control"
              placeholder="Phone No."
              onChange={handleChange('mobile')}
              />
        </div>
        <div className="form-group">
          <input  type="text"
              required
              className="form-control"
              placeholder="E-mail"
              onChange={handleChange('email')}
              />
        </div>
        <div class="btnspace">
          <Button variant="primary"
                onClick={this.continue}
              >Continue
          </Button>
        </div>
      </div>

    )
  }
}
