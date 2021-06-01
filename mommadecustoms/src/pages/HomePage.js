import { Component } from 'react';

import { Carousel, Image } from 'react-bootstrap';

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
      className="d-block w-100 "
      src="https://i.etsystatic.com/17860400/r/il/ad52a4/2692769080/il_1588xN.2692769080_l4mk.jpg"
      alt="First slide"
      height="700px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://i.etsystatic.com/17860400/r/il/fbb161/2369504624/il_1588xN.2369504624_k7t5.jpg"
      alt="Second slide"
      height="700px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://i.etsystatic.com/17860400/r/il/d8e9b4/1878590835/il_1588xN.1878590835_lpls.jpg"
      alt="Third slide"
      height="700px"
      
      
    />
  </Carousel.Item>
</Carousel>
<br/>
<br/>
<br/>

                </div>
                <h1 id="about-h1">About MomMade</h1>
               
                <div id="about-mom-made">
                    <p id="about-text1">Hey Guys thanks so much for checking out my shop!
                        I always loved creating shirts, back in high school I use to airbrush and hand paint characters on shirts for classmates. Fast Forward to 7 years later I meet my husband and mother in law who had a t-shirt screen print shop. My husband later wasn't able to maintain the shop because of his full time job and balancing family life. After 3-4 years of the equipment sitting and collecting dust a lightbulb went off in my head "that I could do this, THIS IS MEANT TO BE." I got into the shop and after a while of trial and error, a little quick training from husband here I am and I'm out here killing it!

                        This is something I really take pride in. A lot of tears and sweat in the beginning learning the screen press, and with my families support I was able to branch out into other shirt printing machines. Thankful for the late nights and the family babysitting while I am able to put my all into this. Every shirt is made with care, passion, and love they are MOM MADE!
                        
                        I also SCREENPRINT for businesses, events, school functions, family reunions, etc. If you would like to buy in bulk I do have special rates, just send me a message.

                        CHECK OUT ON MY SOCIAL MEDIA PAGES, I provide videos of shirts sometimes pictures do not do them any justice you can’t always see how they sparkle.
                      </p> 
                      </div>

                      <div id="about-socials">
                      <a href="https://www.facebook.com/CollinsInkShirts/?ref=bookmarks">
                     <Image id="facebook-logo" 
                            src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" 
                            height="60px"
                            width="60px"
                            roundedCircle />
                    </a> 
                    <a href="https://www.instagram.com/mommadecustomtees/?utm_medium=copy_link">
                     <Image id="insta-logo" 
                            src="https://cdn.iconscout.com/icon/free/png-256/instagram-1868978-1583142.png" 
                            height="60px"
                            width="60px"
                            rounded />
                    </a> 
                    <a href="https://www.tiktok.com/@mommadecustomtees?lang=en">
                     <Image id="tiktok-logo" 
                            src="https://mk0serviceprofelh5qk.kinstacdn.com/wp-content/uploads/group-avatars/784/5dac50060efbe-bpfull.png" 
                            height="60px"
                            width="60px"
                            rounded />
                    </a>
                    
                      </div>


                
                <div id="about-mom-made-img">
                 
                </div>
                <br/>
                <br/>
                <br/>
                <h1> Collections </h1>
                <br/>
                <br/>
                <div id="collections">
                <i onDoubleClick={()=> this.props.setPage('tshirts')} >
                     <Image id="tshirt-collec-img" 
                            src="https://i.etsystatic.com/17860400/r/il/4a1064/2790314765/il_1588xN.2790314765_ckr7.jpg" 
                            height="300px"
                            width="300px"
                            alt='T-Shirts'
                            roundedCircle />
                    </i>
                    <i onDoubleClick={()=> this.props.setPage('sweatshirts')} >
                     <Image id="sweatshirt-collec-img" 
                            src="https://i.etsystatic.com/17860400/r/il/6ed783/2692755938/il_1588xN.2692755938_rwmj.jpg" 
                            height="300px"
                            width="300px"
                            roundedCircle />
                    </i>
                    <i onDoubleClick={()=> this.props.setPage('hoodies')} >
                     <Image id="hoodie-collec-img" 
                            src="https://i.etsystatic.com/17860400/r/il/4ce819/2369498554/il_1588xN.2369498554_tfiw.jpg" 
                            height="300px"
                            width="300px"
                            roundedCircle />
                    </i>
                    <i onDoubleClick={()=> this.props.setPage('tanktops')} >
                     <Image id="tanktop-collec-img" 
                            src="https://i.etsystatic.com/17860400/r/il/c5856b/2139843160/il_1588xN.2139843160_hat4.jpg" 
                            height="300px"
                            width="300px"
                            roundedCircle />
                    </i>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </>
        )
    }
}


export default Home;