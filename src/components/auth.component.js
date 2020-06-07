import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

export default class Authenticate extends Component {
  state = {
    username: "",
    password: "",
  }
  handleAuth = input => e => {
    this.setState({[input]: e.target.value});
  }
  login = () => {
    if(this.state.password === "notaPassword" && this.state.username === "sounakbh@gmail.com") {
        window.location = '/stats';
    }
    else {
      alert("Invalid Credentials");
    }
  }
  render() {
    return(
        <div className="container">
        <div className="heading" style={{marginBottom: "5%"}}><FontAwesomeIcon style={{color:"#808080"}} icon={faLock} /> &nbsp;Admin</div>
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
