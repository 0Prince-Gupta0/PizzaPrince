import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../Actions/userAction";
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Loader from "../components/loader";
import Success from "../components/success";
import Error from "../components/error";

const Register = () => {
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const registerhandler = () => {
    if (password !== confirmPassword) {
      alert("Password do not match");
    } else {
      const user = { name, email, password, confirmPassword };
      dispatch(registerUser(user));
      setName("");
      setConfirmPassword("");
      setPassword("");
      setEmail("");
    }
  };
  return (
    <>
      <Container>
      
        <Card style={{ width: '18rem', marginTop:"50px", marginLeft:"35%" }}>
      <Card.Body>
        <Card.Title className="text-center" ><h1>Register</h1></Card.Title>
        <hr />
        <Card.Subtitle className="mb-2 text-muted text-center">Register to grab your pizza</Card.Subtitle>
        <Card.Text>
        {loading && <Loader />}
        {success && <Success success="User Register Successfully" />}
        {error && <Error error="something went wrong" />}
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className="mt-3"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control className="mt-3"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control className="mt-3"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>          
        </Form>
        </Card.Text>
        <Button  style={{marginLeft:"35%"}} variant="primary" onClick={registerhandler}>
            Register
          </Button>
      </Card.Body>
    </Card>
      
          
          
      </Container>
    </>
  );
};

export default Register;