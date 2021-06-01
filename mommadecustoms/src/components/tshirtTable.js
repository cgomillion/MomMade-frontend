





const TshirtTable = (props) => { 
    console.log(props)
    return (
        <div className="product-div">
        <table>
            <tbody>
                {props.tshirts.map(tshirt => {
                    return (
                        <div className="product-div">
                        <tr key={tshirt._id} >
                            <td>{tshirt.type}</td>
                            <td>{tshirt.product.name}</td>
                            <td>{tshirt.product.brand}</td>
                            <td>{tshirt.product.color}</td>
                            <td>{tshirt.product.size}</td>
                            <td>{tshirt.product.description}</td>
                            <td>{tshirt.product.price}</td>
                            
                        </tr>
                        </div>
                        )
                    })
                }
            </tbody>
        </table>
        
        </div>
    )

}

export default TshirtTable