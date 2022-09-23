import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import profilePic from "../assets/"
import "./Signup.css";
function imagevalidate() {}
function HandleSignup(e) {
  e.preventDefault();
}
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  //image state

  return (
    <Container>
      <Row>
        <Col
          md={6}
          classname="d-flex align-item-center justify-content-center flex-direction-column"
        >
          <Form
            style={{ width: "80%", maxwidth: "500px" }}
            onSubmit={HandleSignup}
          >
            <h1 className="text-center">Create an Account</h1>
            <div className="signup-profile-pic__container">
              {/* <img src="profilePic"/ classname="signup-profile-pic"> */}
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fas fa-plus-circle  add-picture-icon"></i>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png, image/jpeg "
                onChange={imagevalidate}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create an account
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already have an account? <Link to="/login">login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={6} classname="signup_bg">
          {""}
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
