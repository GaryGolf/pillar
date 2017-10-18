import * as React from 'react';
interface Props {}
export default (props:Props) => {
  const imageHandleStyle = {
    transform: 'translate3d(0px, 451.336px, 0px)', 
    background: 'url(img/hero10.jpg)', 
    opacity: 1,
  };
  return (
    <section className="features features-7 imagebg height-80 parallax" data-overlay="5">
      <div className="background-image-holder" 
        style={imageHandleStyle}>
        <img alt="image" src="img/hero10.jpg"/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2>Bold, Simple,
              <em>Robust.</em>
            </h2>
            <p className="lead">
              Smart styling, unique demo layouts and Variant Page Builder included.
            </p>
            <hr/>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="feature">
              <h6>Beautifully Responsive</h6>
                <p>
                  Every one of Pillar’s stylish blocks are fully responsive, meaning 
                  that your site shines - regardless of the device your users.
                </p>
              </div>
          </div>
          <div className="col-sm-4">
            <div className="feature">
              <h6>Content Focussed</h6>
              <p>
                Featuring a multitude of ways to showcase your information, 
                Pillar excels in unique and engaging content arrangements.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="feature">
              <h6>Unique but Adaptable</h6>
              <p>
                Offering a range of unique themed font pairings means that 
                achieving the perfect visual tone for your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
