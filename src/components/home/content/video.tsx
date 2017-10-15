import * as React from 'react';

import * as styles from './video.css'
interface Props {}

export default (props:Props) => {
  const url = 'https://www.youtube.com/embed/JyNIJ8U03I0?autoplay=1&mute=1&modestbranding=1'+
    '&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=mbYTP_video_1508003128161'+
    '&origin=http%3A%2F%2Fpillar.mediumra.re&allowfullscreen=true&wmode=transparent&iv_load_policy=3'+
    '&html5=1&widgetid=1';

  return (
    <section className="imagebg videobg height-100 video-active" data-overlay="5">
      
      <iframe 
        className={styles.video}
        src={url}
        frameBorder={0}
        allowFullScreen
      />

      <div className="background-image-holder" 
        style={{ background:'url(img/hero27.jpg)', opacity:1 }}>
        <img alt="image" src="img/hero27.jpg"/>
      </div>
      <div className="container pos-vertical-center">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 text-center">
            <p className="lead">
              Pillar is a Chicago-based collective of passionate designers, 
              developers and brand strategists offering insight to some of 
              the world's most admired brands.
            </p>
          </div>
        </div>
      </div>
      <div className="loading-indicator"/>
    </section>
  );
};
