import * as React from 'react';
import Link from 'components/common/link';

interface Props {}

export default (props:Props) => {
  return (
    <div className="nav-module logo-module left">
      <Link to="/">
        <img className="logo logo-dark" alt="logo" src="/img/logo-dark.png"/>
        <img className="logo logo-light" alt="logo" src="/img/logo-light.png"/>
      </Link>
    </div>
  );
};
