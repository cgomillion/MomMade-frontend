import React from 'react';
import {  Navbar, Nav, Container, Row, Col, Image } from 'react-bootstrap'


function Footer(props) {
  return(
    <div className="footer">
      <Navbar bg="dark" variant="dark" expand="sm" >
                <Navbar.Brand href="/" className="justify-content-center">
                    <img
                        alt=""
                        src="https://i.etsystatic.com/isla/aa4c64/34539361/isla_500x500.34539361_71uzp77a.jpg?version=0"
                        width="80"
                        height="80"
                        /> 
            </Navbar.Brand>
           
            <Navbar.Collapse className="justify-content-start">
              <Nav className="justify-content-start">
                <Nav.Link className="header-link" href="/">Home</Nav.Link> <br/>
                <Nav.Link className="header-link" onClick={() => props.setPage('tshirts')}>T-Shirts</Nav.Link> <br/>
                <Nav.Link className="header-link" onClick={() => props.setPage('sweatshirts')}>Sweatshirts</Nav.Link> <br/>
                <Nav.Link className="header-link" onClick={() => props.setPage('hoodies')}>Hoodies</Nav.Link> <br/>
                <Nav.Link className="header-link" onClick={() => props.setPage('tanktops')}>Tanktops</Nav.Link> <br/>
                <Nav.Link className="header-link" onClick={() => props.setPage('products')}>All Products</Nav.Link> <br/>
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
                        <Image id="linkedin-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFRvUEqzzAK2FS51pmGNrLFNXiVfKJ36Rtw&usqp=CAU" roundedCircle />
                    </a>
                    </Col>
    
                </Row>
            </Container>
            <Nav className="justify-content-end">
                
                <i onDoubleClick={()=> props.setPage('admin')} >
                      <h2>T-Shirts</h2>
                         <Image id="admin-img" 
                                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/admin-setting-4-559934.png" 
                                height="60px"
                                width="60px"
                                alt='admin'
                                roundedCircle />
                        </i>
            </Nav>
          </Navbar>
          
    </div>
    
  )
}

export default Footer;