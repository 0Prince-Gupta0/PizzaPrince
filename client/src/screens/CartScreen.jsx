import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { addToCart, deleteFromCart } from "../Actions/cartAction";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Checkout from "../components/checkout";


const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  return (
    <>
      <Container>
      <Card style={{marginTop:"50px"}} className="text-center">
      <Card.Body>
        <Card.Title><h1>My Cart</h1></Card.Title>
        <Card.Text>
        {cartItems.map((item) => (
                <>
                      <Card>
                       <Row>
                        <Col md={6}><Card.Img variant="top" src={item.image} />
                        </Col>
                        <Col md={6}>
                        <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <hr></hr>
                      <Card.Text>
                      <h5>
                       {item.variant}
                       </h5>
                       <h5>
                       {item.crust}
                       </h5>
                       <h5>
                      {item.topping}
                       </h5>
                       <h6>
                      {" "} 
                      Price : {item.quantity} X {item.prices[0][item.variant]} ={" "}
                      {item.price}
                    </h6>
                    <h6>
                      Quantity :&nbsp;
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity - 1, item.variant)
                          );
                        }}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addToCart(item, item.quantity + 1, item.variant)
                          );
                        }}
                      />
                    </h6>
                      </Card.Text>
                      <Button variant="danger"><FaTrash
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    /></Button>
                      </Card.Body>

                        </Col>
                       </Row>
                      
                      </Card>
                </>
              ))}
        </Card.Text>
      </Card.Body>
      <Checkout subTotal={subTotal} />
    </Card>
      </Container>
    </>
  )
}

export default CartScreen;