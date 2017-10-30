import * as React from 'react';
import { Parallax } from 'react-parallax';

interface Props {}
interface State {}

export default class ShopSliderHeader extends React.PureComponent <Props, State> {
  render() {
    

    return (
      <Parallax bgImage="/img/hero20.jpg" strength={200}>
        <section className="height-70 imagebg cover cover-4 parallax" 
          data-overlay="3">
          <div className="container pos-vertical-center">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 text-center">
                <h1>MADE FOR EVERYDAY.</h1>
                <p className="lead">
                  <em>Finely crafted, timeless fashion pieces selected by the Pillar team</em>
                </p>
                <a className="btn btn--primary" href="#">
                  <span className="btn__text">
                    View Collection
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    );
  }
}
