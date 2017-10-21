import * as React from 'react';
import SocialList from 'components/nav-menu/social-list';

interface Props {}

export default (props:Props) => {
  return (
    <footer className="bg--dark footer-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <img alt="logo" className="logo" src="img/logo-light.png"/>
            <p>
                <em>Digital Design Melbourne</em>
            </p>
            <ul className="footer__navigation">
              <li>
                <a href="#">
                    <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Selected Work</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Get In Touch</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Careers</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-8">
            <h6>Recent News</h6>
            <div className="twitter-feed">
              <div className="tweets-feed" data-feed-name="mrareweb" data-amount="2" id="tweets-0"/>
            </div>
          </div>
          <div className="col-md-4 col-md-offset-1 col-sm-12">
            <h6>Subscribe</h6>
            <p>Get monthly updates and free resources.</p>
            <form className="form--merge form--no-labels form--active" 
              action="http://mrareco.createsend.com/t/d/s/kieth/?callback=?" 
              method="post" 
              id="subForm" 
              data-error="Please fill all fields correctly." 
              data-success="Thanks for signing up! Please check your inbox for confirmation email." 
              noValidate>
              <br/>
              <input 
                className="col-md-8 col-sm-6 validate-required validate-email" 
                id="fieldEmail" 
                name="cm-kieth-kieth" 
                type="email" 
                placeholder="Email Address"
              />
              <button type="submit" className="btn">Go</button>
            </form>
            <h6>Connect with Us</h6>
            <SocialList/>
          </div>
        </div>
        {/* <!--end of row--> */}
      </div>
      {/* <!--end of container--> */}
      <div className="footer__lower">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-center-xs">
              <span className="type--fine-print">© Copyright
              <span className="update-year">2017</span> Medium Rare - All Rights Reserved</span>
            </div>
            <div className="col-sm-6 text-right text-center-xs">
              <a href="#top" className="inner-link top-link">
                <i className="interface-up-open-big"></i>
              </a>
            </div>
          </div>
          {/* <!--end of row--> */}
        </div>
        {/* <!--end of container--> */}
      </div>
    </footer>
  );
};
