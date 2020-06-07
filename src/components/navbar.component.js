import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faLeaf } from '@fortawesome/free-solid-svg-icons'
import './css/navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faLeaf} style={{color:"#228B22"}}/> &nbsp;Cloverly
        </Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/user" className="nav-link">Register</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item navbar-left">
            <Link to="/auth" className="nav-link">
              <FontAwesomeIcon style={{color:"#808080"}} icon={faLock} />&nbsp; Login
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
