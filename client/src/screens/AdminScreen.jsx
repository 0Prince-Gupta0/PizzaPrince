import React, { useEffect } from "react";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap';


const AdminScreen = () => {
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState;
    useEffect(() => {
      if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
        window.location.href = "/";
      }
    }, [currentUser]);
  return (
    <> <Container>
        <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
        <ButtonGroup className="d-grid gap-2">
        <LinkContainer to="/admin/userlist">
        <Button variant="secondary"size="lg" className="lg text-center">All Users</Button>
        </LinkContainer>
        <LinkContainer to="/admin/pizzalist">
        <Button variant="secondary" size="lg" className="lg text-center">All Pizzas</Button>
        </LinkContainer>
        <LinkContainer to="/admin/orderlist">
        <Button variant="secondary" size="lg" className="lg text-center">All Orders</Button>
        </LinkContainer>
        <LinkContainer to="/admin/addNewPizza">
        <Button variant="secondary" size="lg" className="lg text-center">Add New Pizza</Button>
        </LinkContainer>
        </ButtonGroup>
        
        
    </Container>
 </>
  )
}

export default AdminScreen