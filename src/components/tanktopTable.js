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
                              <Card.Title className="card-name">{tanks.product.name}</Card.Title>
                             
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                              <ListGroupItem className="card-desc">Price: {tanks.product.price}</ListGroupItem>
                              <ListGroupItem className="card-name">Brand: {tanks.product.brand} </ListGroupItem>
                              <ListGroupItem className="card-desc"> {tanks.product.description} </ListGroupItem>
                              <ListGroupItem className="card-desc"> {tanks.product.color} </ListGroupItem>
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