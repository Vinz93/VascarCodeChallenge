import React from 'react';
import UserInfo from './UserInfo';
import { Row, Col } from 'react-flexbox-grid';
import logo from '../img/logo.png';
const Header = () => (
    <Row className="header">
      <Col xs={6}>
        <img className="img-logo" src={logo} alt="logo"/>
      </Col>
      <Col xs={6}>
        <UserInfo />
      </Col>
    </Row>
);

export default Header;
