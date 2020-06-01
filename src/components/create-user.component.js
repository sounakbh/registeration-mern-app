import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      mobile: 0,
      email: '',
      regType: '',
      numTickets: 0
    }
  }
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mobile: this.state.mobile,
      email: this.state.email,
      regType: this.state.regType,
      numTickets: this.state.numTickets
    }
    console.log(user);
    axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data))
    .then(window.location = '/');
  }

  render() {
    return(
      <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>firstName </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.handleChange('firstName')}
              />
        </div>
        <div className="form-group">
          <label>lastName </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.handleChange('lastName')}
              />
        </div>
        <div className="form-group">
          <label>Mobile </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.mobile}
              onChange={this.handleChange('mobile')}
              />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange('email')}
              />
        </div>
        <div className="form-group">
          <label>Registration Type </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.regType}
              onChange={this.handleChange('regType')}
              />
        </div>
        <div className="form-group">
          <label>Num of Tickets </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.numTickets}
              onChange={this.handleChange('numTickets')}
              />
        </div>


        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
