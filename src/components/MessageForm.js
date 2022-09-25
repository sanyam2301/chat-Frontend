import React from "react";
import { Form } from "react-bootstrap";
import { Button, Col, Row } from "react-bootstrap";
import "./MessageForm.css";
function MessageForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="message-output"></div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Your message"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button
              variant="Primary"
              type="submit"
              style={{ width: "100%", backgroundColor: "#ff00ff" }}
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default MessageForm;
