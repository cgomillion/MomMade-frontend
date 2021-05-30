const SweatshirtTable = (props) => { 
    console.log(props)
    return (
        <table>
            <tbody>
                {props.sweatshirts.map(sweatshirt => {
                    return (
                        <tr key={sweatshirt._id} >
                            <td>{sweatshirt.type}</td>
                            <td>{sweatshirt.product.name}</td>
                            <td>{sweatshirt.product.brand}</td>
                            <td>{sweatshirt.product.color}</td>
                            <td>{sweatshirt.product.size}</td>
                            <td>{sweatshirt.product.description}</td>
                            <td>{sweatshirt.product.price}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}

export default SweatshirtTable