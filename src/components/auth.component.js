import React, { Component } from 'react';
import {Button, Form} from 'react-bootstrap';

export default class Authenticate extends Component {
  state = {
    username: "",
    password: "",
  }
  handleAuth = input => e => {
    this.setState({[input]: e.target.value});
  }
  login = () => {
    if(this.state.password == "notaPassword" && this.state.username == "sounakbh@gmail.com") {
        window.location = '/stats';
    }
    else {
      alert("Invalid Credentials");
    }
  }
  render() {
    return(
        <div className="container">

        <div className="form-group">
          <input  type="text"
              required
              className="form-control"
              placeholder="Username"
              onChange={this.handleAuth('username')}
              />
        </div>
        <div className="form-group">
          <input  type="text"
              required
              className="form-control"
              placeholder="Password"
              type="password"
              onChange={this.handleAuth('password')}
              />
        </div>
        <div className="btnspace">
          <Button variant="primary"
                onClick={this.login}
              >Login</Button>
        </div>
      </div>

    )
  }
}
