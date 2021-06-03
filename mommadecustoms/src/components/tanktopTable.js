import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Tanktops = (props) => {
    
    return (
        <div className="product-div">
        
                {props.tanktops.map(tanks => {
                    // console.log(products.product.name)
                    return (
                        <div key={tanks.id} className="item-div">
                            

                        <Card border="dark" bg="success" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={tanks.product.img} />
                            <Card.Body>
                              <Card.Title>{tanks.product.name}</Card.Title>
                             
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroupItem>Price: {tanks.product.price}</ListGroupItem>
                              <ListGroupItem>Brand: {tanks.product.brand} </ListGroupItem>
                            </ListGroup>
                        </Card>

                        </div>
                        )
                    })
                }
           
        </div>
    )
}


export default Tanktops