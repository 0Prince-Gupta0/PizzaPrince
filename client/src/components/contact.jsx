import React from 'react'
import {Container, Row , Col} from 'react-bootstrap'
import {BiPhoneCall} from 'react-icons/bi'
import {FaFax} from 'react-icons/fa'
import {BiMailSend} from 'react-icons/bi'

const contact = () => {
  return (
    <Container  style={{marginTop:'50px'}}>
        <Row>
            <Col md={6}><img src="./images/contact.jpg" height='75%' alt="not found"/></Col>
            <Col md={6} text-center>
               
               <div className='text-center'>
               <h1 style={{marginTop:"100px"}}>We love To Connect With You</h1>
               <h2 style={{margin:"50px"}}>
                <BiPhoneCall />
                123456789
                </h2>
                <h2 style={{margin:"50px"}}>
                <FaFax />
                xxxx-xxxx
                </h2>
                <h2 style={{margin:"50px"}}>
                <BiMailSend />
                xxxx-xxxx
                </h2>
                
                </div>
               
            </Col>
        </Row>
    </Container>
  )
}
 export default contact;