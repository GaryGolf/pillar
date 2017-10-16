import * as React from 'react';
interface Props {
  active:boolean;
  toggle(name:string):void;
}

export default (props:Props) => {
  const activeStyle = props.active ? { className: 'active' } : null;
  
  const toggleMenu = (event) => {
    event.preventDefault();
    if (!props.active) props.toggle('blog');
    else props.toggle('');
  };

  return (
    <li {...activeStyle}>
      <a href="#" onClick={toggleMenu}>Blog</a>
      <ul className="multi-column">
        <li>
          <ul>
            <li>
              <span className="multi-column__title">Listing Layouts</span>
            </li>
            <li>
              <a href="blog-cards-large.html">Cards Large</a>
            </li>
            <li>
              <a href="blog-cards-small.html">Cards Small</a>
            </li>
            <li>
              <a href="blog-cards-sidebar.html">Cards Sidebar</a>
            </li>
            <li>
              <a href="blog-vanilla-column.html">Vanilla Column</a>
            </li>
            <li>
              <a href="blog-vanilla-sidebar.html">Vanilla Sidebar</a>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <span className="multi-column__title">Post Layouts</span>
            </li>
            <li>
              <a href="blog-post-audio.html">Audio Single</a>
            </li>
            <li>
              <a href="blog-post-image-header.html">Image Header Single</a>
            </li>
            <li>
              <a href="blog-post-vanilla.html">Vanilla Single</a>
            </li>
            <li>
              <a href="blog-post-video.html">Video Single</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};
