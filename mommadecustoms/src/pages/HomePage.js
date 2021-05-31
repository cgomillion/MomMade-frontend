import { Component } from 'react';

import { Carousel } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props)

    }

    render () {
        
        return (
            <>
                <div id="top-carosel">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.etsystatic.com/17860400/r/il/ad52a4/2692769080/il_1588xN.2692769080_l4mk.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.etsystatic.com/17860400/r/il/fbb161/2369504624/il_1588xN.2369504624_k7t5.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.etsystatic.com/17860400/r/il/d8e9b4/1878590835/il_1588xN.1878590835_lpls.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
                </div>
                <div id="about-mom-made">
                    <p>Hello All! Thank you for taking the time to check out my shop if you have any questions don’t be shy to ask. At this time PLEASE keep in mind due to COVID delivery times can be delayed.

                    I am currently working on bundle deals and new options for the shop. If you have any ideas shoot me a message. 😁</p>
                </div>
                <div id="collections">

                </div>
            </>
        )
    }
}


export default Home;