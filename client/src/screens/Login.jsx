import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../Actions/userAction";
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Loader from "../components/loader";
import Success from "../components/success";
import Error from "../components/error";

const Login = () => {
  const registerState = useSelector((state) => state.loginUserReducer);
  const { error, success, loading } = registerState;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <>
      <Container >
      <Card style={{ width: '18rem', marginTop:"50px" , marginLeft:"35%"}} >
      <Card.Body>
        <Card.Title className="text-center"><h1>Login</h1></Card.Title>
        <hr />
        <Card.Subtitle className="mb-2 text-muted text-center">Login to get your Pizza in 30min</Card.Subtitle>
        <Card.Text>
        {loading && <Loader />}
        {success && <Success success="User Login Successfully" />}
        {error && <Error error="something went wrong" />}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className="mt-3"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
          
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">

            <Form.Control className="mt-3"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          
        </Form>
        </Card.Text>
        <Button style={{ marginLeft:"35%"}} variant="primary" onClick={loginHandler}>
            Login
          </Button>
      </Card.Body>
    </Card>
      </Container>
    </>
  );
};

export default Login;