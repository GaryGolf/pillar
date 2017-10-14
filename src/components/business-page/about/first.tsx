import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
    <section className="imageblock about-1 bg--secondary">
      <div className="imageblock__content col-md-6 col-sm-4 pos-right">
        <div className="background-image-holder" 
          style={{ background: 'url(img/hero29.jpg)', opacity: 1 }}>
          <img alt="image" src="img/hero29.jpg"/>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-8">
            <h3>Assemble pages with over 150 unique content blocks</h3>
            <p>
                Pillar combines smart, modern styling with all the features 
                you’ll need to launch websites of almost any kind. 
                Achieve results faster than ever with the included Variant Page Builder.
            </p>
            <a className="btn btn--square" href="variant/builder.html">
              <span className="btn__text">Launch Builder</span>
            </a>
          </div>
        </div>
        {/* <!--end of row--> */}
      </div>
    </section>
  );
};
