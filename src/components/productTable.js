
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
                              <Card.Title className="card-name">{products.product.name}</Card.Title>
                             
                            </Card.Body>
                            <ListGroup  className="list-group-flush">
                              <ListGroupItem className="card-desc">Price: {products.product.price}</ListGroupItem>
                              <ListGroupItem className="card-name">Brand: {products.product.brand} </ListGroupItem>
                              <ListGroupItem className="card-desc"> {products.product.description} </ListGroupItem>
                              <ListGroupItem className="card-desc"> {products.product.color} </ListGroupItem>
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