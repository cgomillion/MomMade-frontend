
import React, { Component } from 'react'
import {  Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default class Header extends Component {
   constructor(props) {
       super(props)
   }

    render() {
        return (
            <Navbar bg="light" expand="md">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://i.etsystatic.com/isla/aa4c64/34539361/isla_500x500.34539361_71uzp77a.jpg?version=0"
                        width="160"
                        height="160"
                        /> 
            </Navbar.Brand>
           
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end">
                <Nav.Link href="/">Home</Nav.Link> <br/>
                <Nav.Link onClick={() => this.props.setPage('tshirts')}>T-Shirts</Nav.Link>
                <Nav.Link onClick={() => this.props.setPage('sweatshirts')}>Sweatshirts</Nav.Link>
                <Nav.Link onClick={() => this.props.setPage('hoodies')}>Hoodies</Nav.Link>
                <Nav.Link onClick={() => this.props.setPage('tanktops')}>Tanktops</Nav.Link>
                <Nav.Link onClick={() => this.props.setPage('products')}>All Products</Nav.Link>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar>
        )
      }
    }
    
