import React, { Component } from 'react'

export default class NewProductForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
        type: '',
          name: '',
          description: '',
          brand: '',
          color: '',
          size: '',
          price: '',
          img: '',
        
        }
    }


    handleChange = (e)=>{
        console.log(e.target)
        this.setState({
          [e.target.type]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.description]: e.target.value,
            [e.target.brand]: e.target.value,
            [e.target.size]: e.target.value,
            [e.target.color]: e.target.value,
            [e.target.price]: e.target.value,
            [e.target.img]: e.target.value
          
        })
      }

  handleSubmit = (event) => {
    event.preventDefault()
    
    fetch(this.props.baseUrl + '/products', {
      method: 'POST',
      body: JSON.stringify({
        type: this.state.type,
        product: {
        name: this.state.name,
        description: this.state.description,
        brand: this.state.brand,
        color: this.state.color,
        size: this.state.size,
        price: this.state.price,
        img: this.state.img
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    }).then( res => {
      if (res.status === 400 ) {
        console.log(res.status)
      } else if (res.status === 201)
      return res.json()
    }).then( data => {
        // console.log(data)
      this.props.addProduct(data)
      this.setState({
        type: '',
        name: '',
        description: '',
        brand: '',
        color: '',
        size: '',
        price: '',
        img: '',
        
      })
    }).catch (error => console.error({'Error': error}))
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="type">Type: </label>
        <input type="text" id="type" name="type" onChange={ (evt) => this.handleChange(evt) } value={ this.state.type } />
        <br/>

        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" onChange={ (evt) => this.handleChange(evt) } value={ this.state.name } />
        <br/>

        <label htmlFor="description">Description: </label>
        <input type="text" id="description" name="description" onChange={ (evt) => this.handleChange(evt) } value={ this.state.description } />
        <br/>

        <label htmlFor="brand">Brand: </label>
        <input type="text" id="brand" name="brand" onChange={ (evt) => this.handleChange(evt) } value={ this.state.brand } />
        <br/>

        <label htmlFor="color">Color: </label>
        <input type="text" id="color" name="color" onChange={ (evt) => this.handleChange(evt) } value={ this.state.color } />
        <br/>

        <label htmlFor="size">Size: </label>
        <input type="text" id="size" name="size" onChange={ (evt) => this.handleChange(evt) } value={ this.state.size } />
        <br/>


        <label htmlFor="price">Price: </label>
        <input type="text" id="price" name="price" onChange={ (evt) => this.handleChange(evt) } value={ this.state.price } />     
        <br/> 

        <label htmlFor="img">Image Url: </label>
        <input type="text" id="img" name="img" onChange={ (evt) => this.handleChange(evt) } value={ this.state.img } />     
        <br/>  
         <input type="submit" value="Add a New Product" />
      </form>
    )
  }
}