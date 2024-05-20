import React from 'react'
import {Navbar ,Nav ,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {MdLocalOffer} from 'react-icons/md'

const TopBar = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
        <h6 className='text-light'>
              <MdLocalOffer className='text-warning' />&nbsp;&nbsp;
              Free Home Delievery
              </h6>
             <Nav>
                <LinkContainer to="/" activeClassName>
                    <Nav.Link>
                        HOME
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about" activeClassName>
                    <Nav.Link>
                        ABOUT US
                    </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact" activeClassName>
                    <Nav.Link>
                        CONTACT US
                    </Nav.Link> 
                </LinkContainer>
                <LinkContainer to="/policy" activeClassName>
                    <Nav.Link>
                        POLICY
                    </Nav.Link>
                </LinkContainer>
             </Nav>
        </Container>
        </Navbar>
    </>
  )
}

export default TopBar;
