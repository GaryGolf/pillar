import * as React from 'react';
import Button from './tab-button';

interface Tab {
  title: string;
  component: JSX.Element;
}
interface Props {
  tabs: Tab[];
  current?: number;
}
interface State {
  tab: number;
}

export default class TabComponent extends React.PureComponent <Props, State> {

  constructor(props:Props) {
    super(props);
    this.state = {
      tab: props.current || 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    const tab = nextProps.current;
    if (this.props.current !== tab) this.setState({ tab });
  }

  handleTabClick = tab => this.setState({ tab });

  render() {

    const buttons = this.props.tabs
      .map((tab,idx) => (
        <Button
          key={idx}
          tab={idx}
          active={this.state.tab === idx}
          title={tab.title}
          onClick={this.handleTabClick}
        />
      ));

    const components = this.props.tabs
      .map((tab,idx) => (
        <li key={idx} className={this.state.tab === idx ? 'active' : ''}>
          {tab.component}
        </li>
      ));

    return (
      <div className="tabs-container tabs-1">
        <ul className="tabs text-center">
          {buttons}
        </ul>
        <ul className="tabs-content">
          {components}
        </ul>
      </div>
    );
  }
}
