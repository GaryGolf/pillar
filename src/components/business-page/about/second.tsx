import * as React from 'react'
import Video from './video'

interface Props {}
interface State {
  showVideo: boolean
}

export default class Second extends React.Component <Props, State> {
  constructor(props:Props){
    super(props)

    this.state = {
      showVideo: false
    }
  }

  handlePlayVideo = () => this.setState({showVideo:true})
  handleStopVideo = () => this.setState({showVideo:false})

  render() {
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
                  <div className="video-play-icon video-play-icon--sm modal-trigger" 
                    data-modal-index="0"
                    onClick={this.handlePlayVideo}
                  />
                  <span className="h6">Watch Overview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Video
          active={this.state.showVideo}
          stop={this.handleStopVideo}
        />
      </section>
    )
  }
}