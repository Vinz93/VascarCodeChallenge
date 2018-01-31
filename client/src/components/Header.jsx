import React from 'react';
import UserInfo from './UserInfo';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
const Header = () => (
    <Row className="header">
      <Col xs={6}>
        <Link to="/">
          <img className="img-logo" src={logo} alt="logo"/>
        </Link>
      </Col>
      <Col xs={6}>
        <UserInfo />
      </Col>
    </Row>
);

export default Header;
