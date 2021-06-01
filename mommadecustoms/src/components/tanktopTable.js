const TanktopTable = (props) => { 
    
    return (
        <div className="product-div">
        
                {props.tanktops.map(tanktop => {
                    return (
                        <table>
                        <tbody>
                        <div className="product-div">
                        <tr key={tanktop._id} >
                            <td>{tanktop.type}</td>
                            <td>{tanktop.product.name}</td>
                            <td>{tanktop.product.brand}</td>
                            <td>{tanktop.product.color}</td>
                            <td>{tanktop.product.size}</td>
                            <td>{tanktop.product.description}</td>
                            <td>{tanktop.product.price}</td>
                            <img className="product-img" alt='' src={tanktop.product.img} />
                        </tr>
                        </div>
                        </tbody>
                        </table>
                        )
                    })
                }
        
        </div>
    )

}

export default TanktopTable