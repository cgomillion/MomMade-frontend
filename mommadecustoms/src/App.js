import './App.css';
import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import ProductTable from './components/productTable';
// import NewProductForm from './components/newProductForm';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TshirtPage from './pages/TshirtPage';
import SweatshirtPage from './pages/SweatshirtPage';
import HoodiePage from './pages/HoodiePage';
import Tanktops from './pages/TanktopPage';
import AllProducts from './pages/AllProductsPage';
import 'bootstrap/dist/css/bootstrap.min.css';


// Baseurl
let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3005'
} else {
  baseUrl = 'https://monstera-language-academy-be.herokuapp.com'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home',
      products: [],
      tshirts: [],
      sweatshirts: [],
      hoodies: [],
      tanktops: [],
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

  getTshirts = () => {
    // fetch call to the server (backend)
    fetch(baseUrl + "/products/tshirts",{
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
        tshirts: data,
      })
      
     })
     
  }

  getSweatshirts = () => {
    // fetch call to the server (backend)
    fetch(baseUrl + "/products/sweatshirts",{
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
        sweatshirts: data,
      })
      
     })
     
  }

  getHoodies = () => {
    // fetch call to the server (backend)
    fetch(baseUrl + "/products/hoodies",{
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
        hoodies: data,
      })
      
     })
     
  }

  getTanktops = () => {
    // fetch call to the server (backend)
    fetch(baseUrl + "/products/tanktops",{
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
        tanktops: data,
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
      this.getTshirts()
      this.getSweatshirts()
      this.getHoodies()
      this.getTanktops()
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

    setPage = (pageName) => {
      this.setState({
        page: pageName
      });
    };
  

  render () {
    let page;
    if(this.state.page === 'tshirts' ) {
      page = <TshirtPage tshirts={this.state.tshirts} setPage={this.setPage}/>
    }
    else if(this.state.page === 'sweatshirts') {
      page = <SweatshirtPage sweatshirts={this.state.sweatshirts} setPage={this.setPage} />
    }
    else if(this.state.page === 'hoodies') {
      page = <HoodiePage hoodies={this.state.hoodies} setPage={this.setPage} />
    }
    else if(this.state.page === 'tanktops') {
      page = <Tanktops tanktops={this.state.tanktops} setPage={this.setPage} />
    }
    else if(this.state.page === 'products') {
      page = <AllProducts products={this.state.products} setPage={this.setPage} />
    }
    else {
      page = <HomePage setPage={this.setPage}/>
    }

    console.log(this.state.hoodies)

  return (
    <div className="App">
      <Header setPage={this.setPage} />

     {page}

      <br/>

     

 

    </div>
    );
  }
}

export default App;
