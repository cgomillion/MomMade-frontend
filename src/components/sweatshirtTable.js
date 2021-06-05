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
                              <Card.Title className="card-name">{sweatshirt.product.name}</Card.Title>
                             
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroupItem className="card-desc">Price: {sweatshirt.product.price}</ListGroupItem>
                              <ListGroupItem className="card-name">Brand: {sweatshirt.product.brand} </ListGroupItem>
                              <ListGroupItem className="card-desc"> {sweatshirt.product.description} </ListGroupItem>
                              <ListGroupItem className="card-desc"> {sweatshirt.product.color} </ListGroupItem>
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