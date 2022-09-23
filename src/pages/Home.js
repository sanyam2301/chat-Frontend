import React from "react";
import { Row, Button, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex align-item-center justify-content-center flex-direction-column"
      >
        <div>
          <h1>Connect,Share,Enjoy with Everyone</h1>
          <p> Chat App for you</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              Get Started{" "}
              <i className=" fas fa-comments home-messagge-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} classname="home__bg"></Col>
    </Row>
  );
}

export default Home;
