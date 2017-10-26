import * as React from 'react';

interface Props {}

export default (props:Props) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="feature boxed feature-1 text-center">
              <i className="icon icon-Speach-BubbleDialog"/>
              <h5>Chat With Friends</h5>
              <p>
                Pillar features a bevy of content blocks and layouts to create your website.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="feature boxed feature-1 text-center">
              <i className="icon icon-Photos"/>
              <h5>Share Moments</h5>
              <p>
                A multitude of colour and font options make Pillar's look dynamic and adaptable.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="feature boxed feature-1 text-center">
              <i className="icon icon-Pizza-Slice"/>
              <h5>Organize Events</h5>
              <p>
                Buy as many one-use licenses as you need and start building beautiful sites today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
