


const ProductTable = (props) => {
    
    return (
        <div className="product-div">
        
                {props.products.map(products => {
                    // console.log(products.product.name)
                    return (
                        <div key={products.id} className="item-div">
                            <img className="product-img" alt='' src={products.product.img}/>
                        
                        <table>
                            <tbody>
                                <tr>
                                    <td>{products.type}</td>
                                    <td>{products.product.name}</td>
                                    <td>{products.product.brand}</td>
                                    <td>{products.product.color}</td>
                                    <td>{products.product.size}</td>
                                    <td>{products.product.description}</td>
                                    <td>{products.product.price}</td>
                                    
                                    
                                </tr>
                        </tbody>
                        </table>
                        </div>
                        )
                    })
                }
           
        </div>
    )
}


export default ProductTable