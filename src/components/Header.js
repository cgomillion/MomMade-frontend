import React from 'react'
import {  Navbar, Nav } from 'react-bootstrap'

let baseUrl = process.env.REACT_APP_BACKENDURL;

// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://localhost:3005'
// } else {
//   baseUrl = 'https://proj4-mommadecustoms-api.herokuapp.com/'
// }
 const Header = (props) => {
   

   const logoutUser = async (event) => {
    const url = baseUrl + '/user/logout'
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        credentials: "include" 
      })

      if (response.status === 200) {
        console.log("User has been logged out")
        props.setUser('')
        props.setPage('home')
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }
    
        return (
            <Navbar bg="success" variant="dark" expand="md">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://i.etsystatic.com/isla/aa4c64/34539361/isla_500x500.34539361_71uzp77a.jpg?version=0"
                        width="120"
                        height="100"
                        /> 
            </Navbar.Brand>
           
            <Navbar.Collapse className="justify-content-start">
              <Nav className="justify-content-start">
                <Nav.Link className="header-link" href="/">Home</Nav.Link> <br/>
                <Nav.Link className="header-link" onClick={() => props.setPage('tshirts')}>T-Shirts</Nav.Link>
                <Nav.Link className="header-link" onClick={() => props.setPage('sweatshirts')}>Sweatshirts</Nav.Link>
                <Nav.Link className="header-link" onClick={() => props.setPage('hoodies')}>Hoodies</Nav.Link>
                <Nav.Link className="header-link" onClick={() => props.setPage('tanktops')}>Tanktops</Nav.Link>
                <Nav.Link className="header-link" onClick={() => props.setPage('products')}>All Products</Nav.Link>
                <Nav.Link className="header-link" href="#disabled" disabled>Create-Your-Own <br/> Coming Soon!</Nav.Link>
              </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
            {
              props.username
              ? <div>
                  Signed in as: <br/>{props.username} <br/>
                  <button onClick={logoutUser}>Logout</button>
                  <Nav.Link onClick={() => props.setPage('cart')}>
                  <span class="material-icons-outlined">
                  shopping_cart
                  </span> 
            </Nav.Link>
              
                </div>
              :
              <Nav className="justify-content-end">
                <Nav.Link onClick={() => props.setPage('register')} id='signup'>Register</Nav.Link>
                <Nav.Link onClick={() => props.setPage('login')} id='login'>Login</Nav.Link>
                <Nav.Link onClick={() => props.setPage('cart')}>
                <span class="material-icons-outlined">
                  shopping_cart
                  </span>
            </Nav.Link>
              </Nav>

            }

                </Navbar.Text>
              </Navbar.Collapse>
          </Navbar>
        )
      
    }
    

    export default Header;