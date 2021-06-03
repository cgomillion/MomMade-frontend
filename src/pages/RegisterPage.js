import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3005'
} else {
  baseUrl = 'https://git.heroku.com/proj4-mommadecustoms-api.git'
}
class Register extends Component {
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

  registerUser = async (event) => {
    event.preventDefault()

    const url = baseUrl + '/user/signup'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
        }),
        credentials: "include" 
      })

      if (response.status === 201) {
        console.log("User has been registered")
        this.props.setPage('login')
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  render() {
    return(
      <div id="register-container">
        <h1>Register / Signup</h1>
        <Form id="register-form" onSubmit={this.registerUser}>
          <Form.Group controlId="username">
            <Form.Control
              required
              type="text"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </Form.Group>
            

          <Form.Group controlId="password">
            <Form.Control
              required
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button id="signup-btn" variant="primary" type="submit">
            Register User
          </Button>
        </Form>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}


export default Register;