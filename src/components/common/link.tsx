import * as React from 'react';
import { push, replace } from 'redux-first-routing';
const { connect } = require('react-redux');

interface Props {
  to: string;
  router?: any;
  push?(to:string): void;
  replace?(to:string): void;
  children?: any;
  className?: string;
}
interface State {}
@connect(
  state => ({
    router: state.router,
  }),
  dispatch => ({
    push: to => dispatch(push(to)),
    replace: to => dispatch(replace(to)),
  }),
)
export default class Link extends React.Component <Props,State> {

  constructor(props:Props) {
    super(props);
  }

  handleClick = (event) => {

    const { to, push, replace } = this.props;

    // Ignore any click other than a left click
    if ((event.button && event.button !== 0)
      || event.metaKey
      || event.altKey
      || event.ctrlKey
      || event.shiftKey
      || event.defaultPrevented === true) {
      return;
    }
    event.preventDefault();
    // if (replace) replace(to);
    // else push(to);
    push(to);
  }

  render() {
    const { to, children, className } = this.props;
    return (
      <a href={to} onClick={this.handleClick} className={className}>
        {children}
      </a>
    );
  }
}
