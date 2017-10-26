import * as React from 'react';

interface Props {}
interface State {
  showVideo: boolean;
}

export default class LandingAppVideo extends React.PureComponent <Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {
      showVideo: false,
    };
  }

  handlePlay = () => this.setState({ showVideo:true })
  handleStop = () => this.setState({ showVideo: false })

  render() {
    const { showVideo } = this.state;

    const video = !showVideo ? null : (
      <div className="modal-container modal-active" 
        data-modal-index="0"
        onClick={this.handleStop}>

        <div className="modal-content bg-dark" 
          data-width="60%" 
          data-height="60%" 
          style={{ width:'60%', height:'75%' }}>
        
          <iframe 
            src="https://www.youtube.com/embed/4QUVRm4UZA4?autoplay=1" 
            allowFullScreen 
            data-src="https://www.youtube.com/embed/4QUVRm4UZA4?autoplay=1"
          />
        
          <div className="modal-close modal-close-cross"
            onClick={this.handleStop}
          />
      </div>
    </div>
    );

    const imageHolderStyle = {
      transform:'translate3d(0px, 10px, 0px)', 
      background:'url(/img/project-single-4.jpg)', 
      opacity: 1,
    };
    return (
      <section className="imagebg section--even parallax" data-overlay="2">
        <div className="background-image-holder" style={imageHolderStyle}>
          <img alt="background" src="img/project-single-4.jpg"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="modal-instance modal-video-1">
                <div className="video-play-icon  modal-trigger" 
                  data-modal-index="0"
                  onClick={this.handlePlay}
                />
                <span className="h6">How Does Pillar Work?</span>
              </div>
            </div>
          </div>
        </div>
        {video}
      </section>
    );
  }
}