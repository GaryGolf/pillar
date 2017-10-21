import * as React from 'react';
const { connect } = require('react-redux');

interface State {}
interface Props {
  social?: ISocial;
}

@connect(
  store => ({
    social: store.app.appConfig.social as ISocial,
  }),
)
export default class SocialList extends React.Component <Props, State> {

  constructor(props:Props) {
    super(props);
  }

  getSocialIcon = (name: string):string => {
    switch (name) {
      case 'FacebookURL' :
        return 'socicon-facebook';
      case 'TwitterURL' :
        return 'socicon-twitter';
      case 'PinterestURL' :
        return 'socicon-pinterest';
      case 'InstagramURL' :
        return 'socicon-instagram';
      case 'YouTubeURL' :
        return 'socicon-youtube';
      case 'LinkedInURL' :
        return 'socicon-linkedin';
      case 'FlickrURL' :
        return 'socicon-flickr';
      case 'TripAdvisorURL' :
        return 'socicon-tripadvisor';
      case 'VimeoURL' :
        return 'socicon-vimeo';
      case 'GooglePlusURL' :
        return 'socicon-googleplus';
      default :
        return null;
    }
  }

  render() {
    const { social } = this.props;
    if (!social) return null;
    
    const icons = Object.keys(social)
      .map((item:string) => {
        const icon = this.getSocialIcon(item);
        if (!icon) return null;

        return (
          <li key={icon}>
            <a href={social[item]}>
              <i className={icon}/>
            </a>
          </li>
        );
      });

    return(
      <ul className="social-list">
        {icons}
      </ul>
    );
  }
}
