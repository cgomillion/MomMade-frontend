
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const AdminProducts = (props) => {
    
    return (
        <div className="product-div">
        
                {props.products.map(products => {
                    // console.log(products.product.name)
                    return (
                        <div key= {products.id} className="item-div">
                            

                        <Card border="dark" bg="danger" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={products.product.img} />
                            <Card.Body>
                              <Card.Title>{products.product.name}</Card.Title>
                             
                            </Card.Body>
                            <ListGroup  className="list-group-flush">
                              <ListGroupItem>Price: {products.product.price}</ListGroupItem>
                              <ListGroupItem>Brand: {products.product.brand} </ListGroupItem>
                              <ListGroupItem className="admin-link" onClick={()=>props.deleteProduct(products._id)}> Remove </ListGroupItem>
                              <ListGroupItem className="admin-link" onClick={()=>props.showEditForm(products)}> Edit </ListGroupItem>
                            </ListGroup>
                        </Card>

                        </div>
                        )
                    })
                }
           
        </div>
    )
}


export default AdminProducts