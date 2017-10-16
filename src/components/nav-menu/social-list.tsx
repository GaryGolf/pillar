import * as React from 'react';

interface Props {}

export default (props:Props) => {
  return(
    <ul className="social-list">
      <li>
        <a href="#">
          <i className="socicon-twitter"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="socicon-dribbble"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="socicon-facebook"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="socicon-instagram"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="socicon-pinterest"></i>
        </a>
      </li>
    </ul>
  );
};
