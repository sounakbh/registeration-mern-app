import React, { Component } from 'react';

export default class TicketsPage extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return(
        <div>
        <div className="form-group">
          <label>Registration Type </label>
          <input  type="text"
              required
              className="form-control"
              value={values.regType}
              onChange={handleChange('regType')}
              />
        </div>
        <div className="form-group">
          <label>Num of Tickets </label>
          <input  type="text"
              required
              className="form-control"
              value={values.numTickets}
              onChange={handleChange('numTickets')}
              />
        </div>
        <button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</button>
        <button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</button>
      </div>

    )
  }
}
