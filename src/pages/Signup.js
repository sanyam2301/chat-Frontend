import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import "./Signup.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  //image state
  const [image, setImage] = useState(null);
  const [uploadingImg, setuploadingImg] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  function imagevalidate(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Maximum file size is 1Mb");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      console.log(imagePreview);
    }
  }

  async function uploadImage(image) {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ltprot9m");
    try {
      setuploadingImg(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dhr0vlmfi/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      setuploadingImg(false);
      return urlData.url;
    } catch {
      setuploadingImg(false);
      console.log("error image not upload");
    }
  }
  async function HandleSignup(e) {
    e.preventDefault();
    if (!image) {
      return alert("Please add a profile picture");
    }
    const url = await uploadImage(image);
    console.log(url);
  }

  return (
    <Container>
      <Row>
        <Col
          md={6}
          className="d-flex align-item-center justify-content-center flex-direction-column"
        >
          <Form
            style={{ width: "80%", maxwidth: "500px" }}
            onSubmit={HandleSignup}
          >
            <h1 className="text-center">Create an Account</h1>
            <div className="signup-profile-pic__container">
              <img
                src={imagePreview || profile}
                className="signup-profile-pic"
                alt="profile "
              />
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
        <Col md={6} className="signup_bg">
          {""}
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
