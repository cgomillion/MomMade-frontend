import './App.css';
import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import ProductTable from './components/productTable';
import NewProductForm from './components/newProductForm';


// Baseurl
let baseUrl = 'http://localhost:3005'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      modalOpen: false,
      productToBeEdited: {},
      type: '',
      product: {
        name: '',
        description: '',
        brand: '',
        color: '',
        size: '',
        price: '',
      }
    }
  }

  getProducts = () => {
    // fetch call to the server (backend)
    fetch(baseUrl + "/products",{
      credentials: "include"
    })
    .then(res => { 
      if (res.status===200){
        return res.json()
      }
      else {
        return []
      }
    }).then(data => {
      this.setState({
        products: data,
      })
      
     })
     
  }

  addProduct = (newProduct) => {
    const copyProducts = [...this.state.products]
    copyProducts.push(newProduct)
    this.setState({
      products: copyProducts
    })
  }

  deleteProduct = async (id) => {
    const url = baseUrl + '/products/' + id
    
    try{
      const response = await fetch( url, {
        method: 'DELETE',
        credentials: "include"
      })

      if (response.status===200){

        const findIndex = this.state.products.findIndex(product => product._id === id)
        const copyProducts = [...this.state.products]
        copyProducts.splice(findIndex, 1)
        console.log(`Deleted product at index: ${findIndex} `)
            
        this.setState({
          products: copyProducts
        })
      }
      
    }
    catch(err){
      console.log('Error => ', err);
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
      const url = baseUrl + '/products/' + this.state.productToBeEdited._id
      try{
        const response = await fetch( url , {
          method: 'PUT',
          body: JSON.stringify({
            type: e.target.type.value,
            product:{
              name: e.target.name.value,
              description: e.target.description.value,
              brand: e.target.brand.value,
              size: e.target.size.value,
              color: e.target.color.value,
              price: e.target.price.value,
            }
             
          }),
          headers: {
            'Content-Type' : 'application/json'
          },
          credentials: "include"
        })
  
        if (response.status===200){
          const updatedProduct = await response.json()
          const findIndex = this.state.products.findIndex(prod => prod._id === updatedProduct.data._id)
          const copyProducts = [...this.state.products]
          copyProducts[findIndex] = updatedProduct.data
          this.setState({
            products: copyProducts,
            modalOpen:false
          })
        }
      }
      catch(err){
        console.log('Error => ', err);
      }
    }

    componentDidMount() {
      this.getProducts()
      
    }
    
    handleChange = (e)=>{
      console.log(e.target)
      this.setState({
        [e.target.name]: e.target.value,
        product: {
          [e.target.name]: e.target.value,
          [e.target.description]: e.target.value,
          [e.target.brand]: e.target.value,
          [e.target.size]: e.target.value,
          [e.target.color]: e.target.value,
          [e.target.price]: e.target.value,
        }
      })
    }



    showEditForm = (prod)=>{
      console.log(prod)
      this.setState({
        modalOpen:true, 
        type: prod.type,
        product: {
          name: prod.product.name,
          description: prod.product.description,
          brand: prod.product.brand,
          size: prod.product.size,
          color: prod.product.color,
          price: prod.product.price,
        },
        productToBeEdited: prod
      })
    }
  

  render () {
    // console.log(this.state.products)
  return (
    <div className="App">
      <ProductTable
        products={this.state.products}
        deleteProduct={this.deleteProduct}
        showEditForm={this.showEditForm}
      />
      <NewProductForm baseUrl={ baseUrl } addProduct={ this.addProduct } />

      <br/>

      {this.state.modalOpen &&

  <form onSubmit={this.handleSubmit}>
  <label>Edit Product : </label> <br/>
  <input name="type" value={this.state.type} onChange={this.handleChange}/> <br/>
  <input name="name" value={this.state.product.name} onChange={this.handleChange}/> <br/>
  <input name="description" value={this.state.product.description} onChange={this.handleChange}/> <br/>
  <input name="brand" value={this.state.product.brand} onChange={this.handleChange}/> <br/>
  <input name="color" value={this.state.product.color} onChange={this.handleChange}/> <br/>
  <input name="size" value={this.state.product.size} onChange={this.handleChange}/> <br/>
  <input name="price" value={this.state.product.price} onChange={this.handleChange}/> <br/>
    <button>Submit Changes</button>

</form>
}

    </div>
    );
  }
}

export default App;
