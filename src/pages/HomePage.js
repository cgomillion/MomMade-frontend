

import { Carousel, Image } from 'react-bootstrap';

const Home = (props) => {

        
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
                    <a href="https://www.etsy.com/shop/MomMadeCustomTees?ref=simple-shop-header-name&listing_id=670728214">
                     <Image id="etsy-logo" 
                            src="data:image/png;base64,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" 
                            height="60px"
                            width="60px"
                            rounded />
                    </a>
                      </div>
                      <br/>
                      <br/>
                      <br/>
                      <br/>


                
                <div id="about-mom-made-img">
                <Carousel>
  <Carousel.Item>
    <img
      className="center w-60 "
      src="https://scontent.fhsv1-1.fna.fbcdn.net/v/t1.6435-9/118623166_902822896909822_4135547299520419873_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=YwH3TrWKf64AX-b8NKN&_nc_ht=scontent.fhsv1-1.fna&oh=3a44a65b438dba92106df92c27e51f0a&oe=60DB426B"
      alt="First slide"
      height="500px"
      widith="500px"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="center w-60 "
      src="https://scontent.fhsv1-1.fna.fbcdn.net/v/t1.6435-9/95254042_811441786047934_2111947818737336320_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=973b4a&_nc_ohc=uR5SpCov7eQAX8A0QP4&_nc_ht=scontent.fhsv1-1.fna&oh=a559f784e3d0d926c2d2804cc5aebcc4&oe=60DE3EEA"
      alt="Second slide"
      height="500px"
      width="500px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="center w-60 "
      src="https://scontent.fhsv1-1.fna.fbcdn.net/v/t1.6435-9/101987865_836258413566271_3603191701205680128_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=HV9HXvSXA4gAX-4CQ-X&_nc_ht=scontent.fhsv1-1.fna&oh=2ef735ae2de6805af11e37b3ac67f75d&oe=60DD9E47"
      alt="Third slide"
      height="500px"
      width="500px"
      
      
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="center w-60 "
      src="https://scontent.fhsv1-1.fna.fbcdn.net/v/t1.6435-9/82148024_730847740774006_3831062333556260864_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=973b4a&_nc_ohc=G1yCkgETuCsAX-ev72l&_nc_ht=scontent.fhsv1-1.fna&oh=ea8873416bb73082a34dd1092fab2688&oe=60DBFC9C"
      alt="Fourth slide"
      height="500px"
      width="500px"
      
      
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="center w-65 "
      src="https://scontent.fhsv1-1.fna.fbcdn.net/v/t1.6435-9/80105221_705896676602446_8379396974482292736_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=kl8LnnLOrCMAX_kPi1r&_nc_ht=scontent.fhsv1-1.fna&oh=ab61f22027a0f3db657cfcdb6ccfa14d&oe=60DC7CAC"
      alt="Fifth slide"
      height="500px"
      width="500px"
      
      
    />
  </Carousel.Item>
</Carousel>
                 
                </div>
                <br/>
                <br/>
                <br/>
                <h1> Collections </h1>
                <br/>
                <br/>
                <div id="collections-div">
                <div id="collections">
                <i onDoubleClick={()=> props.setPage('tshirts')} >
                  <h2>T-Shirts</h2>
                     <Image id="tshirt-collec-img" 
                            src="https://i.etsystatic.com/17860400/r/il/4a1064/2790314765/il_1588xN.2790314765_ckr7.jpg" 
                            height="300px"
                            width="300px"
                            alt='T-Shirts'
                            roundedCircle />
                    </i>
                    </div>
                    <div id="collections">
                    <i onDoubleClick={()=> props.setPage('sweatshirts')} >
                      <h2>Sweatshirts</h2>
                     <Image id="tshirt-collec-img" 
                            src="https://i.etsystatic.com/17860400/r/il/6ed783/2692755938/il_1588xN.2692755938_rwmj.jpg" 
                            height="300px"
                            width="300px"
                            roundedCircle />
                    </i>
                    </div>
                    <div id="collections">
                    <i onDoubleClick={()=> props.setPage('hoodies')} >
                      <h2>Hoodies</h2>
                     <Image id="tshirt-collec-img" 
                            src="https://i.etsystatic.com/17860400/r/il/4ce819/2369498554/il_1588xN.2369498554_tfiw.jpg" 
                            height="300px"
                            width="300px"
                            roundedCircle />
                    </i>
                    </div>
                    <div id="collections">
                    <i onDoubleClick={()=> props.setPage('tanktops')} >
                      <h2>Tank Tops</h2>
                     <Image id="tshirt-collec-img" 
                            src="https://i.etsystatic.com/17860400/r/il/c5856b/2139843160/il_1588xN.2139843160_hat4.jpg" 
                            height="300px"
                            width="300px"
                            roundedCircle />
                    </i>
                </div>
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


export default Home;