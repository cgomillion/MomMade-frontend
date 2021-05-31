import React from 'react';
import {  Navbar, Nav, Container, Row, Col, Image } from 'react-bootstrap'


function Footer(props) {
  return(
    <div className="footer">
      <Navbar bg="dark" variant="dark" expand="md" fixed="bottom">
                <Navbar.Brand href="/" className="justify-content-center">
                    <img
                        alt=""
                        src="https://i.etsystatic.com/isla/aa4c64/34539361/isla_500x500.34539361_71uzp77a.jpg?version=0"
                        width="160"
                        height="180"
                        /> 
            </Navbar.Brand>
           
            <Navbar.Collapse className="justify-content-start">
              <Nav className="justify-content-start">
                <Nav.Link href="/">Home</Nav.Link> <br/>
                <Nav.Link onClick={() => props.setPage('tshirts')}>T-Shirts</Nav.Link> <br/>
                <Nav.Link onClick={() => props.setPage('sweatshirts')}>Sweatshirts</Nav.Link> <br/>
                <Nav.Link onClick={() => props.setPage('hoodies')}>Hoodies</Nav.Link> <br/>
                <Nav.Link onClick={() => props.setPage('tanktops')}>Tanktops</Nav.Link> <br/>
                <Nav.Link onClick={() => props.setPage('products')}>All Products</Nav.Link> <br/>
              </Nav>
              </Navbar.Collapse>
              <Container className="justify-content-center" id="personal-links">
                <Row>
                    <Col xs={5} md={7}>
                    <a href="https://github.com/cgomillion">
                     <Image id="github-logo" src="https://image.flaticon.com/icons/png/512/25/25231.png" roundedCircle />
                    </a>
                    </Col>
                    <Col xs={5} md={2}>
                    <a href="https://www.linkedin.com/in/corey-gomillion/">
                        <Image id="linkedin-logo" src="https://img-premium.flaticon.com/png/512/61/61109.png?token=exp=1622436046~hmac=f48dfc1db8d3c379527023746f1d24e9"  roundedCircle />
                    </a>
                    </Col>
    
                </Row>
            </Container>
          </Navbar>
          
    </div>
    
  )
}

export default Footer;