import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';

interface Props {}

export default (props:Props) => {
  return (
    // <section className="partners-1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {/* <div className="slider" data-items="6" data-timing="3000"> */}
            <Carousel 
            // autoPlay interval={3000} infiniteLoop
            showStatus={false} 
            showIndicators={false} 
            // showThumbs={false}
  
            >
              <div>
                <img alt="img" src="img/hero1.jpg"/>
              </div>
              <div>
                <img alt="img" src="img/hero1.jpg"/>
              </div>
              <div>
                <img alt="img" src="img/hero3.jpg"/>
              </div>
              <div>
                <img alt="img" src="img/hero4.jpg"/>
              </div>
            </Carousel>
     {/* </div>  */}
           </div>
         </div>
       </div>
    //  </section>
  );
};
