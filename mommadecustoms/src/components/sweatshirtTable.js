import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Sweatshirts = (props) => {
    
    return (
        <div className="product-div">
        
                {props.sweatshirts.map(sweatshirt => {
                    // console.log(products.product.name)
                    return (
                        <div key={sweatshirt.id} className="item-div">
                            

                        <Card border="dark" bg="success" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={sweatshirt.product.img} />
                            <Card.Body>
                              <Card.Title>{sweatshirt.product.name}</Card.Title>
                             
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroupItem>Price: {sweatshirt.product.price}</ListGroupItem>
                              <ListGroupItem>Brand: {sweatshirt.product.brand} </ListGroupItem>
                            </ListGroup>
                        </Card>

                        </div>
                        )
                    })
                }
           
        </div>
    )
}


export default Sweatshirts