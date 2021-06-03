import { Component } from 'react';
import Products from '../components/adminProdTable';
import NewProductForm from '../components/newProductForm';


// Baseurl
let baseUrl = process.env.REACT_APP_BASEURL;

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3005'
// } else {
//   baseURL = 'https://proj4-mommadecustoms-api.herokuapp.com/'

// }

export default class AllProductsAdmin extends Component {
    constructor(props) {
        super(props)

        this.state ={ 
            modalOpen: false,
            productModalOpen: false,
            productToBeShown: {},
            productToBeEdited: {},
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



    addProduct = (newProduct) => {
        const copyProducts = [...this.props.products]
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
    
            const findIndex = this.props.products.findIndex(product => product._id === id)
            const copyProducts = [...this.props.products]
            copyProducts.splice(findIndex, 1)
            console.log(`Deleted product: ${findIndex} `)
                
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
                  img: e.target.img.value,
                }
                 
              }),
              headers: {
                'Content-Type' : 'application/json'
              },
              credentials: "include"
            })
      
            if (response.status===200){
              const updatedProduct = await response.json()
              const findIndex = this.props.products.findIndex(prod => prod._id === updatedProduct.data._id)
              const copyProducts = [...this.props.products]
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

    handleChange = (e)=>{
        // console.log(e.target)
        this.setState({
          [e.target.type]: e.target.value,
          product: {
            [e.target.name]: e.target.value,
            [e.target.description]: e.target.value,
            [e.target.brand]: e.target.value,
            [e.target.size]: e.target.value,
            [e.target.color]: e.target.value,
            [e.target.price]: e.target.value,
            [e.target.img]: e.target.value,
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
            img: prod.product.img
          },
          productToBeEdited: prod
        })
      }

      
    

   render() {
       
        return (
            <div>
                <>
                <h1> Edit / Delete / New Page</h1>
            <NewProductForm baseUrl={ baseUrl } addProduct={ this.addProduct } />
            <Products 
                products = {this.props.products} 
                deleteProduct={this.deleteProduct} 
                showEditForm={this.showEditForm} 
             />
            
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
                <input name="img" value={this.state.product.img} onChange={this.handleChange}/> <br/>
                <button>Submit Changes</button>

                </form>}
                </>
            </div>
        )
    }
}
