import * as React from 'react'
interface Props {
  active:boolean
  toggle(name:string):void
}

export default (props:Props) => {
  const activeStyle = props.active ? {className: "active"} : null
  
  const toggleMenu = e => {
    e.preventDefault()
    if(!props.active) props.toggle('elements')
    else props.toggle('')
  }

  return (
    <li {...activeStyle}>
      <a href="#" onClick={toggleMenu}>Elements</a>
      <ul className="multi-column" style={{marginLeft: "-16.4688px"}}>
        <li>
          <ul>
            <li>
              <a href="elements-accordions.html">Accordions</a>
            </li>
            <li>
              <a href="elements-buttons.html">Buttons</a>
            </li>
            <li>
              <a href="elements-cards.html">Cards</a>
            </li>
            <li>
              <a href="elements-covers.html">Cover Sections</a>
            </li>
            <li>
              <a href="elements-forms.html">Forms - Elements</a>
            </li>
            <li>
              <a href="elements-subscribe-forms.html">Forms - Subscribe</a>
            </li>
            <li>
              <a href="elements-footers.html">Footers</a>
            </li>
            <li>
              <a href="elements-hover-tiles.html">Hover Tiles</a>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <a href="elements-icon-combinations.html">Icon Combinations</a>
            </li>
            <li>
              <a href="elements-maps.html">Maps</a>
            </li>
            <li>
              <a href="elements-modals.html">Modals</a>
            </li>
            <li>
              <a href="elements-navigation.html">Navigation</a>
            </li>
            <li>
              <a href="elements-notifications.html">Notifications</a>
            </li>
            <li>
              <a href="elements-parallax.html">Parallax</a>
            </li>
            <li>
              <a href="elements-pricing.html">Pricing Options</a>
            </li>
            <li>
              <a href="elements-progress-bars.html">Progress - Bars</a>
            </li>
            <li>
              <a href="elements-progress-radials.html">Progress - Radial</a>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <a href="elements-sliders.html">Sliders</a>
            </li>
            <li>
              <a href="elements-tabs.html">Tabbed Content</a>
            </li>
            <li>
              <a href="elements-testimonials.html">Testimonials</a>
            </li>
            <li>
              <a href="elements-twitter.html">Twitter Feeds</a>
            </li>
            <li>
              <a href="elements-typography.html">Typography</a>
            </li>
            <li>
              <a href="elements-video.html">Video Players</a>
            </li>
            <li>
              <a href="elements-video-backgrounds.html">Video Backgrounds</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  )
}