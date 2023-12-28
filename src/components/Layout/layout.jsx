// Layout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BasicHeader from '../common/bootstrap_components/Header/header1.jsx';
import SidebarPro from '../common/bootstrap_components/Sidebar/sidebar1.jsx';
import Footer from '../common/bootstrap_components/footer.jsx';
const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row className='header'>
        <Col>
          <header><BasicHeader /></header>
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={3}>
          <aside><SidebarPro /></aside>
        </Col>
        <Col lg={9} md={9}>
          <main className="mt-4">{children}</main>
        </Col>
      </Row>
      <Row>
        <Col>
          <footer><Footer /></footer>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
