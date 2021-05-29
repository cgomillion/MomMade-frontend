


const ProductTable = (props) =>{
    console.log(props)
    return (
        <table>
            <tbody>
                {props.products.map(products => {
                    console.log(products.product.name)
                    return (
                        <tr key={products._id} >
                            <td>{products.type}</td>
                            <td>{products.product.name}</td>
                            <td>{products.product.brand}</td>
                            <td>{products.product.color}</td>
                            <td>{products.product.size}</td>
                            <td>{products.product.description}</td>
                            <td>{products.product.price}</td>
                            <td onClick={() => props.deleteProduct(products._id)}>|X|</td>
                            <td onClick={() => props.showEditForm(products)}>edit</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ProductTable