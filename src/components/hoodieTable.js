import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Hoodies = (props) => {
    
    return (
        <div className="product-div">
        
                {props.hoodies.map(hood => {
                    // console.log(products.product.name)
                    return (
                        <div key={hood.id} className="item-div">
                            

                        <Card border="dark" bg="success" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={hood.product.img} />
                            <Card.Body>
                              <Card.Title className="card-name">{hood.product.name}</Card.Title>
                             
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroupItem className="card-desc">Price: {hood.product.price}</ListGroupItem>
                              <ListGroupItem className="card-name">Brand: {hood.product.brand} </ListGroupItem>
                              <ListGroupItem className="card-desc"> {hood.product.description} </ListGroupItem>
                              <ListGroupItem className="card-desc"> {hood.product.color} </ListGroupItem>
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