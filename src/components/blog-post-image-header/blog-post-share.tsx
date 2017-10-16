import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <div className="blog-post__share">
          <h5>Share this article</h5>
          <a className="btn btn--sm bg--facebook" href="#">
            <span className="btn__text">
              <i className="socicon-facebook"/> Share on Facebook
            </span>
          </a>
          <a className="btn btn--sm bg--twitter" href="#">
            <span className="btn__text">
              <i className="socicon-twitter"/> Share on Twitter
            </span>
          </a>
          <a className="btn btn--sm bg--googleplus" href="#">
            <span className="btn__text">
              <i className="socicon-googleplus"/> Share on GooglePlus
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
