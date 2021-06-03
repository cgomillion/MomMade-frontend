
import Products from '../components/productTable';


 const AllProducts = (props) => {
       
        return (
            <div>
            <>
            <h1>All Products</h1>
            <Products 
                products = {props.products} 
                 
             />
            
            </>
            </div>
        )
    }


export default AllProducts