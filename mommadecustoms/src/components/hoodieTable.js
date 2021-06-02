import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Hoodies = (props) => {
    
    return (
        <div className="product-div">
        
                {props.hoodies.map(hood => {
                    // console.log(products.product.name)
                    return (
                        <div key={hood.id} className="item-div">
                            

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={hood.product.img} />
                            <Card.Body>
                              <Card.Title>{hood.product.name}</Card.Title>
                             
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroupItem>Price: {hood.product.price}</ListGroupItem>
                              <ListGroupItem>Brand: {hood.product.brand} </ListGroupItem>
                            </ListGroup>
                        </Card>

                        </div>
                        )
                    })
                }
           
        </div>
    )
}


export default Hoodies