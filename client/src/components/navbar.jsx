import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Images from 'react-bootstrap/Image';
import {useDispatch, useSelector} from "react-redux"
import { logoutUser } from "../Actions/userAction";

const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state)=> state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
            <Images src="./logo.png" width='50%'></Images>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/">
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  {" "}
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>{" "}
                </>
              )}

            <LinkContainer to="/cart">
            <Nav.Link href="#features">CART{cartState.cartItems.length}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  )
}

export default NavBar;