

const tshirtTable = (props) =>{
    // console.log(props)
    return (
        <table>
            <tbody>
                {props.tshirts.map(tshirt => {
                    // console.log(products.product.name)
                    return (
                        <tr key={tshirt._id} >
                            <td>{tshirt.type}</td>
                            <td>{tshirt.product.name}</td>
                            <td>{tshirt.product.brand}</td>
                            <td>{tshirt.product.color}</td>
                            <td>{tshirt.product.size}</td>
                            <td>{tshirt.product.description}</td>
                            <td>{tshirt.product.price}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default tshirtTable