import * as React from 'react';
import Link from 'components/common/link';

interface Props {
  active: boolean;
  toggle(name:string): void;
}

export default (props:Props) => {
  const activeStyle = props.active ? { className: 'active' } : null;
  
  const toggleMenu = (event) => {
    event.preventDefault();
    if (!props.active) props.toggle('pages');
    else props.toggle('');
  };
  return (
    <li {...activeStyle}>
      <a href="#" onClick={toggleMenu}>Pages</a>
      <ul>
        <li className="dropdown">
          <a href="#">About</a>
          <ul>
            <li>
              <a href="page-about-company.html">About Company</a>
            </li>
            <li>
              <a href="page-about-process.html">About Process</a>
            </li>
            <li>
              <a href="page-about-team.html">About Team</a>
            </li>
            <li>
              <a href="page-about-team-masonry.html">About Team Masonry</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#">Services</a>
          <ul>
            <li>
              <a href="page-services-boxes.html">Services Boxes</a>
              </li>
              <li>
                <a href="page-services-cards.html">Services Cards</a>
              </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#">Contact</a>
          <ul>
            <li>
              <Link to="page-contact-form-simple">Contact Simple</Link>
            </li>
            <li>
              <a href="page-contact-map-api.html">Contact Map API</a>
            </li>
            <li>
              <a href="page-contact-map-iframe.html">Contact Map iFrame</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#">Accounts</a>
          <ul>
              <li>
                  <a href="page-login.html">Log In</a>
              </li>
              <li>
                <a href="page-signup.html">Create Account</a>
              </li>
            </ul>
        </li>
        <li className="dropdown">
          <a href="#">Utility</a>
          <ul>
            <li>
              <a href="404.html">404 Error</a>
              </li>
              <li>
                <a href="500.html">500 Error</a>
              </li>
              <li>
                <a href="page-utility-coming-soon.html">Coming Soon</a>
              </li>
              <li>
                <a href="page-utility-maintenance.html">Maintenance Mode</a>
              </li>
              <li>
                <a href="page-utility-privacy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="page-utility-results.html">Search Results</a>
              </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};
