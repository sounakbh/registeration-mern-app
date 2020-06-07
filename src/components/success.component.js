import React, { Component } from 'react';
import LogoGIF from "./images/logoGIF3.gif";
import "./css/success.css";

export default class SuccessPage extends Component {
  render() {
    return(
      <div className="container">
        <div className="message">
        <img height="100" width="100" src={LogoGIF} alt="Logo" /> &nbsp; SUCCESS
        </div>
        <div className="submessage">
          Ticket details have been sent to your email.<br/> We look forward to welcoming you.
        </div>
      </div>
    )
  }
}
