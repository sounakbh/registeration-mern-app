import React, { Component } from 'react';
import {Button, Form, ProgressBar} from 'react-bootstrap';

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
      <div className="container">

        <div className="form-group">
          <ProgressBar now={66} label={"66%"}/>
          <br/>

          <Form.Control placeholder="Registration Type" onChange={handleChange('regType')} as="select">
            <option value="Self">Self</option>
            <option value="Group">Group</option>
            <option value="Corporate">Corporate</option>
            <option value="Others">Others</option>
          </Form.Control>
        </div>

        <div className="form-group">
          <input
              type="text"
              required
              className="form-control"
              placeholder="Number of Tickets"
              value={values.numTickets}
              onChange={handleChange('numTickets')}
          />
        </div>

        <div className="btnspace">
          <Button
            variant="danger"
            onClick={this.back}
          >Back
          </Button> &nbsp;
          <Button
            variant="primary"
            onClick={this.continue}
          >Continue
          </Button>
        </div>

      </div>

    )
  }
}
