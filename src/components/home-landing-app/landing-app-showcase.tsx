import * as React from 'react';
const Carousel = require('react-siema');
import * as styles from './slider.css';

interface Props {}

export default class LandingAppShowcase extends React.PureComponent <Props,null> {

  private screenShots: string[];
  private slider;
  private interval: number;

  constructor(props:Props) {
    super(props);
    this.screenShots = [
      '/img/app-screenshot-1.jpg',
      '/img/app-screenshot-2.jpg',
      '/img/app-screenshot-3.jpg',
      '/img/app-screenshot-4.jpg',
      '/img/app-screenshot-5.jpg',
      '/img/app-screenshot-6.jpg',
      '/img/app-screenshot-1.jpg',
      '/img/app-screenshot-2.jpg',
      '/img/app-screenshot-3.jpg',
      '/img/app-screenshot-4.jpg',
      '/img/app-screenshot-5.jpg',
      '/img/app-screenshot-6.jpg',
      '/img/app-screenshot-3.jpg',
      '/img/app-screenshot-4.jpg',
  
    ];
  }

  componentDidMount() {
    this.interval = window.setInterval(() => this.slider.next(), 5000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  
  render() {

    const slides: JSX.Element[] = this.screenShots
      .map((url,idx) => (
        <div key={idx} className={styles.slider}>
          <img alt="slide" src={url}/>
        </div>
      ));

    return (
      <section className="bg--dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h4>Screenshot Showcase</h4>
              <div className="slider slider--controlsoutside screenshot-slider" >
                <Carousel ref={el => this.slider = el} perPage={4} loop >
                  {slides}
                </Carousel> 
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
