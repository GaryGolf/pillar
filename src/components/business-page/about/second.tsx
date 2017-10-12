import * as React from 'react'
interface Props {}

export default (props:Props) => {
  return (
    <section className="imageblock about-2 bg--dark">
      <div className="imageblock__content col-md-6 col-sm-4 pos-left">
        <div className="background-image-holder" style={{background:"url(img/hero28.jpg)", opacity:1}}>
          <img alt="image" src="img/hero28.jpg"/>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-md-push-7 col-sm-8 col-sm-push-4">
            <h2>Build smart, effective websites in no time.</h2>
            <p>
                Pillar features a bevy of content blocks and layouts to create websites of almost any kind — easier than ever before.
            </p>
            <div>
              <div className="modal-instance modal-video-1">
                <div className="video-play-icon video-play-icon--sm modal-trigger" data-modal-index="0"/>
                <span className="h6">Watch Overview</span>
                {/* <!--end of modal-container--> */}
              </div>
            {/* <!--end of modal instance--> */}
            </div>
          </div>
        </div>
      {/* <!--end of row--> */}
      </div>
    {/* <!--end of container--> */}
    </section>
  )
}