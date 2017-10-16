import * as React from 'react';
import SocialList from './social-list';

interface Props {}

export default (props:Props) => {
  return (
    <div className="utility-bar bg--secondary">
      <div className="nav-module left">
        <span className="type--fine-print">Web Design &amp; Development Melbourne</span>
      </div>
      <div className="nav-module left">
        <span className="type--fine-print">(03) 9282 7732</span>
      </div>
      <div className="nav-module right hidden-xs">
        <SocialList/>
      </div>
    </div>
  );
};
