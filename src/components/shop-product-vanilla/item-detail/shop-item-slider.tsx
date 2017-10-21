import * as React from 'react';
interface Props {
  src: string;
}
interface State {}

export default class Slider extends React.PureComponent <Props, State> {
  render() {
    return (
      <div className="slider" data-animation="fade" data-arrows="true" data-paging="true">
        <img alt="product" src={this.props.src}/>
      </div>
    );
  }
}
