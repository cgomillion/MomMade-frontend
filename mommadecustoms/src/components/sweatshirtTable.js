import React, { Component } from 'react'

class SweatshirtTable extends Component { 
    constructor(props) {
        super(props)
    }

    render(){
    return (
        <div className="product-div">
        <table>
            <tbody>
                {this.props.sweatshirts.map(sweatshirt => {
                    return (
                        
                        <tr key={sweatshirt._id} >
                            <td>{sweatshirt.type}</td>
                            <td>{sweatshirt.product.name}</td>
                            <td>{sweatshirt.product.brand}</td>
                            <td>{sweatshirt.product.color}</td>
                            <td>{sweatshirt.product.size}</td>
                            <td>{sweatshirt.product.description}</td>
                            <td>{sweatshirt.product.price}</td>
                            <img className="product-img" alt='' src={sweatshirt.product.img} />
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}
}

export default SweatshirtTable