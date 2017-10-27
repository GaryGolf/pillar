import * as React from 'react';

interface Props {}

export default (props:Props) => {
  const active = true;
  const text = 'Pillar combines smart, modern styling with all the features you’ll ' +
  'need to launch websites of almost any kind. Couple it with our exclusive page ' +
  'builder Variant and you’re golden.';
  return (
    <li className={active ? 'active' : ''}>
      <div className="tab__content">
        <div className="row pos-vertical-align-columns">
          <div className="col-md-6">
            <h6>A Commitment To Quality</h6>
            <p className="lead">{text}</p>
          </div>
          <div className="col-md-4 col-md-push-1 hidden-sm">
            <img alt="pic" src="/img/shop-aux-3.jpg"/>
          </div>
        </div>
      </div>
    </li>
  );
};
