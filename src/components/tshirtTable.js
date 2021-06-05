import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Tshirts = (props) => {
    
    return (
        <div className="product-div">
        
                {props.tshirts.map(tee => {
                    // console.log(products.product.name)
                    return (
                        <div key={tee.id} className="item-div">
                            

                        <Card border="dark" bg="success" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={tee.product.img} />
                            <Card.Body>
                              <Card.Title className="card-name">{tee.product.name}</Card.Title>
                             
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroupItem className="card-desc">Price: {tee.product.price}</ListGroupItem>
                              <ListGroupItem className="card-name">Brand: {tee.product.brand} </ListGroupItem>
                              <ListGroupItem className="card-desc"> {tee.product.description} </ListGroupItem>
                              <ListGroupItem className="card-desc"> {tee.product.color} </ListGroupItem>
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