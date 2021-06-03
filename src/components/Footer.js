import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';


function LinksFooter(props) {
  return(
    <div className="footer">
      <Container id="personal-links">
        <Row>
            <Col xs={5} md={7}>
            <a href="https://github.com/cgomillion">
                <Image id="github-logo" src="https://image.flaticon.com/icons/png/512/25/25231.png" roundedCircle />
            </a>
            </Col>
            <Col xs={5} md={2}>
            <a href="https://www.linkedin.com/in/corey-gomillion/">
                <Image id="linkedin-logo" src="https://img-premium.flaticon.com/png/512/61/61109.png?token=exp=1622436046~hmac=f48dfc1db8d3c379527023746f1d24e9"  roundedCircle />
            </a>
            </Col>
    
        </Row>
      </Container>
    </div>
  )
}

export default LinksFooter;