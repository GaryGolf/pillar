import * as React from 'react';

interface Props {
  active:boolean
  toggle(name:string):void
};

export default (props:Props) => {
  const activeStyle = props.active ? {className: 'active'} : null;
  
  const toggleMenu = (event) => {
    event.preventDefault();
    if(!props.active) props.toggle('work');
    else props.toggle('');
  };

  return (
    <li {...activeStyle}>
      <a href="#" onClick={toggleMenu}>Work</a>
      <ul className="multi-column">
        <li>
          <ul>
            <li>
              <span className="multi-column__title">Portfolios</span>
            </li>
            <li>
              <a href="portfolio-cards-large.html">Cards Large</a>
            </li>
            <li>
              <a href="portfolio-cards-small.html">Cards Small</a>
            </li>
            <li>
              <a href="portfolio-masonry-contained.html">Masonry Contained</a>
            </li>
            <li>
              <a href="portfolio-masonry-wide.html">Masonry Wide</a>
            </li>
            <li>
              <a href="portfolio-vanilla-contained.html">Vanilla Contained</a>
            </li>
            <li>
              <a href="portfolio-vanilla-wide.html">Vanilla Wide</a>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <span className="multi-column__title">Single Projects</span>
            </li>
            <li>
              <a href="portfolio-single-slider.html">Simple Slider</a>
            </li>
            <li>
              <a href="portfolio-single-boxed.html">Image Boxes</a>
            </li>
            <li>
              <a href="portfolio-single-stacked.html">Stacked Image</a>
            </li>
            <li>
              <a href="portfolio-single-stacked-video.html">Stacked Video</a>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <span className="multi-column__title">Galleries</span>
            </li>
            <li>
              <a href="portfolio-images-contained.html">Images Contained</a>
            </li>
            <li>
              <a href="portfolio-images-wide.html">Images Wide</a>
            </li>
            <li>
              <a href="portfolio-modals-contained.html">Modals Contained</a>
            </li>
            <li>
              <a href="portfolio-modals-wide.html">Modals Wide</a>
            </li>
            <li>
              <a href="portfolio-video-contained.html">Video Contained</a>
            </li>
            <li>
              <a href="portfolio-video-wide.html">Video Wide</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};