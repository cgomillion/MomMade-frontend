const HoodieTable = (props) => { 
    console.log(props)
    return (
        <table>
            <tbody>
                {props.hoodies.map(hoodie => {
                    return (
                        <tr key={hoodie._id} >
                            <td>{hoodie.type}</td>
                            <td>{hoodie.product.name}</td>
                            <td>{hoodie.product.brand}</td>
                            <td>{hoodie.product.color}</td>
                            <td>{hoodie.product.size}</td>
                            <td>{hoodie.product.description}</td>
                            <td>{hoodie.product.price}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}

export default HoodieTable