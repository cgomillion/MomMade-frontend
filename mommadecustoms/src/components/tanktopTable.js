const TanktopTable = (props) => { 
    console.log(props)
    return (
        <table>
            <tbody>
                {props.tanktops.map(tanktop => {
                    return (
                        <tr key={tanktop._id} >
                            <td>{tanktop.type}</td>
                            <td>{tanktop.product.name}</td>
                            <td>{tanktop.product.brand}</td>
                            <td>{tanktop.product.color}</td>
                            <td>{tanktop.product.size}</td>
                            <td>{tanktop.product.description}</td>
                            <td>{tanktop.product.price}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}

export default TanktopTable