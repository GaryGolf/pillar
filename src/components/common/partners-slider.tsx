import * as React from 'react';
const Carousel = require('react-siema');

interface Props {}

export default class PartnersSlider extends React.PureComponent <Props, null> {
  private slider;
  private interval:number;
  private partnersURL:string[];
  constructor(props:Props) {
    super(props);

    this.partnersURL = [
      '/img/partner1.png',
      '/img/partner2.png',
      '/img/partner3.png',
      '/img/partner4.png',
      '/img/partner5.png',
      '/img/partner6.png',
      '/img/partner7.png',
    ]; 
  }

  componentDidMount() {
    this.interval = window.setInterval(() => this.slider.next(), 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  
  render() {
    const partners: JSX.Element[] = this.partnersURL
      .map((url,idx) => (
        <div key={idx} >
          <img alt="slide" src={url}/>
        </div>
      ));
    return (
      <section className="partners-1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="slider">
             
              <Carousel ref={el => this.slider = el} perPage={4} loop >
                {partners}
              </Carousel>
              </div>
             </div>
           </div>
         </div>
      </section>
    );
  } 
}
