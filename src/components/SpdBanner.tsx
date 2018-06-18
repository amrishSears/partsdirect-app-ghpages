import * as React from 'react';
import {Image,Carousel} from 'react-bootstrap';

class SpdBanner extends React.Component {

    // this constructor is necessary to make the props work
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const banner = require('../img/Mower.jpg')
        
        return (  /*<div className="container">
            <div className="row">
            
                <div className="col-md-6">
                
                <Image src={banner} />
                
                <div className="carousel-caption">
                <h1>Replacement parts for appliances, mowers, tools & more</h1>
                </div>
                
                </div>
                    
                
            </div>
          </div>*/
          <Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src={banner} />
    <Carousel.Caption>
      <h3>Offer1</h3>
      <p>Offer1</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src={banner}  />
    <Carousel.Caption>
      <h3>Offer2</h3>
      <p>Offer3</p>
    </Carousel.Caption>

  </Carousel.Item>
</Carousel>
        
      
        );
    }
}
export default SpdBanner;
 