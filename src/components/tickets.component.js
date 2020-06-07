import React, { Component } from 'react';
import {Button, Form} from 'react-bootstrap';

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
          <Form.Control placeholder="Registration Type" defaultValue={values.regType} onChange={handleChange('regType')} as="select">
            <option selected disabled value="Registration Type">Registration Type</option>
            <option value="Self">Self</option>
            <option value="Group">Group</option>
            <option value="Corporate">Corporate</option>
            <option value="Others">Others</option>
          </Form.Control>
        </div>

        <div className="form-group">
          <input  type="text"
              required
              className="form-control"
              placeholder="Number of Tickets"
              onChange={handleChange('numTickets')}
              />
        </div>
        <div className="btnspace">
          <Button variant="danger"
                onClick={this.back}
              >Back</Button> &nbsp;
          <Button variant="primary"
                onClick={this.continue}
              >Continue</Button>
        </div>
      </div>

    )
  }
}
