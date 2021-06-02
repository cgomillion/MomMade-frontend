import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Tshirts = (props) => {
    
    return (
        <div className="product-div">
        
                {props.tshirts.map(tee => {
                    // console.log(products.product.name)
                    return (
                        <div key={tee.id} className="item-div">
                            

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={tee.product.img} />
                            <Card.Body>
                              <Card.Title>{tee.product.name}</Card.Title>
                             
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroupItem>Price: {tee.product.price}</ListGroupItem>
                              <ListGroupItem>Brand: {tee.product.brand} </ListGroupItem>
                            </ListGroup>
                        </Card>

                        </div>
                        )
                    })
                }
           
        </div>
    )
}


export default Tshirts