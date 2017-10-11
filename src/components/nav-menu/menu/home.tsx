import * as React from 'react'
interface Props {}

export default (props:Props) => {
  return (
    <li>
      <a href="#">Home</a>
      <ul className="multi-column">
        <li>
          <ul>
            <li>
              <span className="multi-column__title">Business Layouts</span>
            </li>
            <li>
              <a href="home-business-classic.html">Classic</a>
            </li>
            <li>
              <a href="home-business-corporate.html">Corporate</a>
            </li>
            <li>
              <a href="home-business-startup.html">Startup</a>
            </li>
            <li>
              <a href="home-business-startup-2.html">Startup 2</a>
            </li>
            <li>
              <a href="home-business-agency.html">Agency</a>
            </li>
            <li>
              <a href="home-business-creative.html">Creative</a>
            </li>
            <li>
              <a href="home-business-split-cover.html">Split Cover</a>
            </li>
            <li>
              <a href="home-business-elegant.html">Elegant</a>
            </li>
        </ul>
        </li>
          <ul>
              <li>
                <span className="multi-column__title">Landing Pages</span>
              </li>
              <li>
                <a href="home-landing-listing-1.html">Listing 1</a>
              </li>
              <li>
                <a href="home-landing-product-1.html">Product 1</a>
              </li>
              <li>
                <a href="home-landing-product-2.html">Product 2</a>
              </li>
              <li>
                <a href="home-landing-service-1.html">Service 1</a>
              </li>
              <li>
                <a href="home-landing-service-2.html">Service 2</a>
              </li>
              <li>
                <a href="home-landing-service-3.html">Service 3</a>
              </li>
              <li>
                <a href="home-landing-service-4.html">Service 4</a>
              </li>
              <li>
                <a href="home-landing-app.html">Application</a>
              </li>
          </ul>
        <li>
          <ul>
            <li>
              <span className="multi-column__title">Niche</span>
            </li>
            <li>
              <a href="home-niche-politician.html">Politician</a>
            </li>
            <li>
              <a href="home-niche-wedding.html">Wedding</a>
              <span className="label">New!</span>
            </li>
            <li>
              <span className="multi-column__title">Shop</span>
            </li>
            <li>
              <a href="home-shop-media.html">Shop Media</a>
            </li>
            <li>
              <a href="home-shop-slider.html">Shop Slider</a>
            </li>
            <li>
              <span className="multi-column__title">Portfolio</span>
            </li>
            <li>
              <a href="home-portfolio-case-studies.html">Case Studies</a>
            </li>
            <li>
              <a href="home-portfolio-column.html">Column</a>
            </li>
            <li>
                <a href="home-portfolio-fullwidth.html">Fullwidth</a>
            </li>
            <li>
              <a href="home-portfolio-personal.html">Personal</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  )
}