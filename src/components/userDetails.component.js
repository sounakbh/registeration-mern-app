import React, { Component } from 'react';

export default class UserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return(
      <div>
        <div className="form-group">
          <label>firstName </label>
          <input  type="text"
              required
              className="form-control"
              value={values.firstName}
              onChange={handleChange('firstName')}
              />
        </div>
        <div className="form-group">
          <label>lastName </label>
          <input  type="text"
              required
              className="form-control"
              value={values.lastName}
              onChange={handleChange('lastName')}
              />
        </div>
        <div className="form-group">
          <label>Mobile </label>
          <input  type="text"
              required
              className="form-control"
              value={values.mobile}
              onChange={handleChange('mobile')}
              />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input  type="text"
              required
              className="form-control"
              value={values.email}
              onChange={handleChange('email')}
              />
        </div>
        <button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</button>
      </div>

    )
  }
}
