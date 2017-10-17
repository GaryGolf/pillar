import * as React from 'react';
interface Props {}

export default (props:Props) => {
  return (
    <div className="row">
      <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
        <div className="blog-post__comments">
          <hr/>
          <h6>3 Comments:</h6>
          <ul>
            <li>
              <div className="comment">
                <div className="comment__image">
                  <img alt="pic" src="img/avatar-small-4.png"/>
                </div>
                <div className="comment__text">
                  <h5>Abigail Roswell</h5>
                  <span>
                    <em>March 17th, 2016</em>
                  </span>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                  </p>
                </div>
                <hr/>
              </div>
                    {/* <!--end comment--> */}
              <ul>
                <li>
                  <div className="comment">
                    <div className="comment__image">
                      <img alt="pic" src="img/avatar-small-3.png"/>
                    </div>
                    <div className="comment__text">
                      <h5>Rick Vogel</h5>
                      <span>
                        <em>March 17th, 2016</em>
                      </span>
                      <p>
                        Vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                      </p>
                    </div>
                    <hr/>
                  </div>
                      {/* <!--end comment--> */}
                </li>
              </ul>
            </li>
            <li>
              <div className="comment">
                <div className="comment__image">
                  <img alt="pic" src="img/avatar-small-1.png"/>
                </div>
                <div className="comment__text">
                  <h5>Lisa Wright</h5>
                  <span>
                    <em>March 15th, 2016</em>
                  </span>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                  </p>
                </div>
                <hr/>
              </div>
                    {/* <!--end comment--> */}
            </li>
          </ul>
          <form className="comment__form form--square">
            <h6>Leave a Comment</h6>
            <input placeholder="Your Name" type="text" name="name"/>
            <input placeholder="Email Address" type="email" name="email"/>
            <textarea placeholder="Your Comment" name="comment" rows={4}></textarea>
            <button type="submit" className="btn btn--primary">Submit Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
};
