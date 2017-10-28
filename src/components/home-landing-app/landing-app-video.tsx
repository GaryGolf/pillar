import * as React from 'react';
import { Parallax } from 'react-parallax';
import YouTubeModal from 'components/common/youtube-modal';
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

  handlePlay = () => this.setState({ showVideo:true });
  handleStop = () => this.setState({ showVideo: false });

  render() {
    const { showVideo } = this.state;

    return (
      <Parallax bgImage="/img/project-single-4.jpg" strength={200}>
        <section className="imagebg section--even parallax" data-overlay="2">
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
          <YouTubeModal
            src="https://www.youtube.com/embed/4QUVRm4UZA4?autoplay=1"
            active={showVideo}
            onClose={this.handleStop}
          />
        </section>
      </Parallax>
    );
  }
}
