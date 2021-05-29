
import React, { Component } from 'react'
import {  Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default class Header extends Component {
   

    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://i.etsystatic.com/isla/aa4c64/34539361/isla_500x500.34539361_71uzp77a.jpg?version=0"
                        width="160"
                        height="160"
                        /> 
            </Navbar.Brand>
           
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link> <br/>
                <Nav.Link href="/products/tshirts">T-Shirts</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">T-Shirts</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Sweatshirts</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Hoodies</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Tank Tops</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
        )
      }
    }
    
