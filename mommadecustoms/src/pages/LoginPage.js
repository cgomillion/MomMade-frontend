import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3005'
} else {
   // heroku url here
}


class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      
    }
  }

  handleChange = (event) => {
    this.setState({ 
        [event.target.id] : event.target.value 
    })
  }

  loginUser = async (event) => {
    event.preventDefault()

    const url = baseUrl + '/user/login'
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
        }),
        credentials: "include" 
      })

      if (response.status === 200) {
        console.log("User is Logged In")
        this.props.setUser(this.state.username)
        this.props.setPage('home')
       
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }

  }

  render() {
    console.log(this.state)
    return(
      <div id="login-container">
        <h1>Login</h1>
        <Form onSubmit={this.loginUser}>
          <Form.Group controlId="username">
            <Form.Control type="text" placeholder="Username" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
          </Form.Group>
          <Button id="login-btn" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    )
  }
}

export default LoginPage;
