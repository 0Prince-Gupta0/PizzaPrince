import React,{useState} from 'react'
import {Card, Button, Row , Col} from 'react-bootstrap';
import {BiCartAlt} from "react-icons/bi";
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from "react-redux";
import { addToCart } from '../Actions/cartAction';

const Pizza = ({pizza}) => {
    const [variant,setVariant]=useState('small');
    const [quantity,setQuantity]=useState(1);
    const [crust,setCrust]=useState('New Hand Tossed');
    const [topping,setTopping]=useState('Onion');
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

    const addToCartHandler=()=>{
      dispatch(addToCart(pizza, quantity, variant, crust, topping))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
       <Card style={{marginTop:"50px"}} className="text-center" >
        <Card.Img variant="top" src={pizza.image} onClick={handleShow} style={{cursor:"pointer"}} />
        <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <hr />
          <Card.Text>
           <Row>
            <Col md={6}>
            <h6>Variants</h6> 
            <select value={variant} onChange={e=>setVariant(e.target.value)} >
               { pizza.variants.map((variant)=>(
                    <option >{variant}</option>
                )) }
            </select>
            </Col>
            <Col md={6}>
            <h6>Quantity</h6> 
            <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
               { [...Array(10).keys()].map((v,i)=>(
                    <option value={i+1} onChange={e=>setQuantity(e.target.value)} >{i+1}</option>
                )) }
            </select>
            </Col>
           </Row> 
           &nbsp;
           <Row>
            <h6>Crust</h6> 
            <select value={crust} onChange={e=>setCrust(e.target.value)}>
               { pizza.crust.map((crust)=>(
                    <option >{crust}</option>
                )) }
            </select>
           </Row>
           &nbsp;
           <Row>
           <h6>Topping</h6> 
            <select value={topping} onChange={e=>setTopping(e.target.value)}>
               { pizza.toppings.map((topping)=>(
                    <option >{topping}</option>
                )) }
            </select>
            
           </Row>
           <hr />   
          </Card.Text>
          <Row>
        <Button 
        variant="primary"
        onClick={addToCartHandler}
        >
          <BiCartAlt />&nbsp;&nbsp;₹{pizza.prices[0][variant]*quantity}</Button>
          </Row>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img variant="top" src={pizza.image} style={{height:"250px"}} />
          <hr />
            <h6>{pizza.description}</h6>
        </Modal.Body>
      </Modal>
    </>
)}

export default Pizza;