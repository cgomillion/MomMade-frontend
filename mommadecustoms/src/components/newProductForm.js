import React, { Component } from 'react'

export default class NewProductForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
        type: '',
        product: {
          name: '',
          description: '',
          brand: '',
          color: '',
          size: '',
          price: '',
          img: '',
        }
        }
    }


    handleChange = (e)=>{
        console.log(e.target)
        this.setState({
          [e.target.type]: e.target.value,
          product: {
            [e.target.name]: e.target.value,
            [e.target.description]: e.target.value,
            [e.target.brand]: e.target.value,
            [e.target.size]: e.target.value,
            [e.target.color]: e.target.value,
            [e.target.price]: e.target.value,
            [e.target.img]: e.target.value
          }
        })
      }

  handleSubmit = (event) => {
    event.preventDefault()
    
    fetch(this.props.baseUrl + '/products', {
      method: 'POST',
      body: JSON.stringify({
        type: this.state.product.type,
        name: this.state.product.name,
        description: this.state.product.description,
        brand: this.state.product.brand,
        color: this.state.product.color,
        size: this.state.product.size,
        price: this.state.product.price,
        img: this.state.product.img
        
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    }).then( res => {
      return res.json()
    }).then( data => {
        // console.log(data)
      this.props.addProduct(data)
      this.setState({
        type: '',
        product: {
        name: '',
        description: '',
        brand: '',
        color: '',
        size: '',
        price: '',
        img: '',
        }
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
        <input type="text" id="name" name="name" onChange={ (evt) => this.handleChange(evt) } value={ this.state.product.name } />
        <br/>

        <label htmlFor="description">Description: </label>
        <input type="text" id="description" name="description" onChange={ (evt) => this.handleChange(evt) } value={ this.state.product.description } />
        <br/>

        <label htmlFor="brand">Brand: </label>
        <input type="text" id="brand" name="brand" onChange={ (evt) => this.handleChange(evt) } value={ this.state.product.brand } />
        <br/>

        <label htmlFor="color">Color: </label>
        <input type="text" id="color" name="color" onChange={ (evt) => this.handleChange(evt) } value={ this.state.product.color } />
        <br/>

        <label htmlFor="size">Size: </label>
        <input type="text" id="size" name="size" onChange={ (evt) => this.handleChange(evt) } value={ this.state.product.size } />
        <br/>


        <label htmlFor="price">Price: </label>
        <input type="text" id="price" name="price" onChange={ (evt) => this.handleChange(evt) } value={ this.state.product.price } />     
        <br/> 

        <label htmlFor="img">Image Url: </label>
        <input type="text" id="img" name="img" onChange={ (evt) => this.handleChange(evt) } value={ this.state.product.img } />     
        <br/>  
         <input type="submit" value="Add a New Product" />
      </form>
    )
  }
}