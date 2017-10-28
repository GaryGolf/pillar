import * as React from 'react';
import YouTubeModal from 'components/common/youtube-modal';

interface Props {}
interface State {
  showVideo: boolean;
}

export default class StartupImage extends React.PureComponent <Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {
      showVideo: false,
    };
  }

  handlePlay = () => this.setState({ showVideo:true });
  handleStop = () => this.setState({ showVideo: false });

  render() {

    const { showVideo } = this.state;

    const imageHolderStyle = {
      transform: 'translate3d(0px, 12.5px, 0px)', 
      background: 'url(img/hero7.jpg)', 
      opacity: 1,
      top: 0, 
    };

    return (
      <section className="height-100 imagebg cover cover-4 parallax" 
        data-overlay="3">
        <div className="background-image-holder background--bottom" style={imageHolderStyle}>
          <img alt="image" src="/img/hero7.jpg"/>
        </div>
        <div className="container pos-vertical-center">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>
                Digital, Delivered.
                </h1>
                <p className="lead">
                    Beautiful front-end components
                    <br/> built for modern startups.
                </p>
                <div>
                  <a className="btn" 
                    href="#">
                    <span className="btn__text">
                      Purchase Now
                    </span>
                  </a>
                  <div className="modal-instance modal-video-1">
                    <div className="video-play-icon video-play-icon--sm modal-trigger" 
                      data-modal-index="0"
                      onClick={this.handlePlay}
                    />
                    <span className="h6">Watch Overview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <YouTubeModal
            src="https://www.youtube.com/embed/4QUVRm4UZA4?autoplay=1"
            active={showVideo}
            onClose={this.handleStop}
          />
        </section>
    );
  }
}
