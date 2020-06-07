import React, { Component } from 'react';
import {Row, Container, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FrontPage from './images/frontPage.png';
import './css/homepage.css'

export default class SuccessPage extends Component {
  render() {
    return(
      <Container>
        <Row>
          <Col lg={6}>
            <div className="homepageHeading">CloveMeet <span style={{color: "#228B22"}}>2.0</span></div>
            <div className="description">Get ready for the annual CloveMeet in 2020. World renowned speakers, hands on coding sessions, and much more. Book your seats now!</div>
            <Button variant="primary">
                  <Link to="/user" style={{color: 'white'}} className="nav-link">Register</Link>
            </Button>
          </Col>
          <Col lg={6}>
            <img src={FrontPage} height="90%"/>
          </Col>
        </Row>
      </Container>
    )
  }
}
