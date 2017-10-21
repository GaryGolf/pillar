import * as React from 'react';
interface Props {}
interface State {
  tab: boolean;
}

export default class HomeBusinessStartupLove extends React.Component <Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      tab: false, // false - designers; true - developers
    };
  }

  handleTabToggle = tab => this.setState(state => ({ tab }));
  

  render() {
    const { tab } = this.state;
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
              <div className="tabs-container tabs-4">
                <ul className="tabs">

                  <li className={tab ? '' : 'active'}>
                    <div className="tab__title btn" onClick={e => this.handleTabToggle(false)}>
                      <span className="btn__text">Designers</span>
                    </div>                              
                  </li>

                  <li className={tab ? 'active' : ''}>
                  <div className="tab__title btn" onClick={e => this.handleTabToggle(true)}>
                    <span className="btn__text">Developers</span>
                  </div>                            
                  </li>

                </ul>
                <ul className="tabs-content">

                  <li className={tab ? '' : 'active'}>
                    <div className="tab__content testimonial-5">
                      <div className="testimonial text-center">
                        <img alt="avatar" src="/img/avatar-large-1.png"/>
                        <hr/>
                        <h5>— Lucas Greenberg, Designer</h5>
                        <blockquote>
                          ”Rock-solid flexibility and support. I’d expect no less from this 
                          team - Pillar has become my new standard ‘go-to’ template for great 
                          looking websites.“
                        </blockquote>
                      </div>
                    </div>
                  </li>

                  <li className={tab ? 'active' : ''}>
                    <div className="tab__content testimonial-5">
                      <div className="testimonial text-center">
                        <img alt="avatar" src="/img/avatar-large-3.png"/>
                        <hr/>
                        <h5>— Danni Gibson, Front-end Developer</h5>
                        <blockquote>
                          “I've been using Medium Rare templates for a couple of years now - 
                          they're always highly polished and backed up by amazing support.”
                        </blockquote>
                      </div>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
