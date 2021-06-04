import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/MainFooter';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AllProductsAdmin from './pages/AdminPage';
import CartPage from './pages/CartPage';
import Tshirts from './pages/TshirtPage';
import Sweatshirts from './pages/SweatshirtPage';
import Hoodies from './pages/HoodiePage';
import Tanktops from './pages/TanktopPage';
import AllProducts from './pages/AllProductsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

// Baseurl
let baseUrl = process.env.REACT_APP_BACKENDURL;

// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://localhost:3005'
// } else {
//   baseUrl = 'https://proj4-mommadecustoms-api.herokuapp.com/'
// }

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
      username: '',

    }
  }

  getProducts = () => {
    // fetch call to the server (backend)
    fetch(baseUrl + "/products",{
      credentials: "include",
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res => { 
      if (res.status===200){
        return res.json()
      }
      else {
        return []
      }
    }).then(data => {
      console.log(data)
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
  
    componentDidMount() {
      this.getProducts()
      this.getTshirts()
      this.getSweatshirts()
      this.getHoodies()
      this.getTanktops()
    }

    setUser = (username) => {
      this.setState({
        username: username
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
      page = <Tshirts tshirts={this.state.tshirts} setPage={this.setPage}/>
    }
    else if(this.state.page === 'sweatshirts') {
      page = <Sweatshirts sweatshirts={this.state.sweatshirts} setPage={this.setPage} />
    }
    else if(this.state.page === 'hoodies') {
      page = <Hoodies hoodies={this.state.hoodies} setPage={this.setPage} />
    }
    else if(this.state.page === 'tanktops') {
      page = <Tanktops tanktops={this.state.tanktops} setPage={this.setPage} />
    }
    else if(this.state.page === 'products') {
      page = <AllProducts products={this.state.products} setPage={this.setPage} />
    }
    else if(this.state.page === 'login') {
      page = <LoginPage setUser={this.setUser} setPage={this.setPage} />
    }
    else if(this.state.page === 'register') {
      page = <RegisterPage setUser={this.setUser} setPage={this.setPage} />
    }
    else if(this.state.page === 'cart') {
      page = <CartPage setUser={this.setUser} setPage={this.setPage} />
    }
    else if(this.state.page === 'admin') {
      page = <AllProductsAdmin products={this.state.products} setPage={this.setPage} />
    }
    else {
      page = <HomePage setPage={this.setPage}/>
    }

    console.log(process.env)

  return (
    <div className="App">
      <Header username={this.state.username} setUser={this.setUser} setPage={this.setPage} />

     {page}
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <Footer setPage={this.setPage}/>
     
    </div>
    );
  }
}

export default App;
