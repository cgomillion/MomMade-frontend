const HoodieTable = (props) => { 
    console.log(props)
    return (
        <div className="product-div">
        <table>
            <tbody>
                {props.hoodies.map(hoodie => {
                    return (
                        <div className="product-div">
                        <tr key={hoodie._id} >
                            <td>{hoodie.type}</td>
                            <td>{hoodie.product.name}</td>
                            <td>{hoodie.product.brand}</td>
                            <td>{hoodie.product.color}</td>
                            <td>{hoodie.product.size}</td>
                            <td>{hoodie.product.description}</td>
                            <td>{hoodie.product.price}</td>
                            
                        </tr>
                        <img className="product-img" alt='' src={hoodie.product.img} />
                        </div>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )

}

export default HoodieTable