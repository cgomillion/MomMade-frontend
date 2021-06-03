
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Products = (props) => {
    
    return (
        <div className="product-div">
        
                {props.products.map(products => {
                    // console.log(products.product.name)
                    return (
                        <div key={products.id} className="item-div">
                            

                        <Card border="dark" bg="success" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={products.product.img} />
                            <Card.Body>
                              <Card.Title>{products.product.name}</Card.Title>
                             
                            </Card.Body>
                            <ListGroup  className="list-group-flush">
                              <ListGroupItem>Price: {products.product.price}</ListGroupItem>
                              <ListGroupItem>Brand: {products.product.brand} </ListGroupItem>
                              <ListGroupItem > {products.product.description} </ListGroupItem>
                              <ListGroupItem > {products.product.color} </ListGroupItem>
                            </ListGroup>
                        </Card>

                        </div>
                        )
                    })
                }
           
        </div>
    )
}


export default Products