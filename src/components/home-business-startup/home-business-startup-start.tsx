import * as React from 'react';
import Link from '../common/link';
interface Props {}

export default (props:Props) => {
  return (
    <section className="cta cta-6">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
            <h3>Start building with Pillar</h3>
            <p className="lead">
              We'd love to hear from you to discuss web design, product development or to 
              hear your new startup idea.
            </p>
            <Link className="btn btn--primary" to="/page-contact-form-simple">
              <span className="btn__text">
                Let's Talk Turkey
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
