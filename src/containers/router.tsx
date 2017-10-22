import * as React from 'react';
import UniversalRouter from 'universal-router';
import { startListener } from 'redux-first-routing';
import { Provider } from 'react-redux';
import { Unsubscribe } from 'redux';
import store from '../store';
import history from '../history';

interface Props {
  routes: any;
}

export default class Router extends React.Component <Props, null> {
  
  private router;
  private component: JSX.Element;
  private unsubscribe: Unsubscribe;

  constructor(props:Props) {
    super(props);
    this.component = <div/>;
    this.router =  new UniversalRouter(props.routes);
    this.unsubscribe = store.subscribe(() => {
      const { pathname } = store.getState().router;
      this.renderComponent(pathname);
    });
  }
  
  componentDidMount() {
    startListener(history, store);
    this.renderComponent(location);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  renderComponent = async (pathname) => {
    this.component = await this.router.resolve(pathname);
    this.forceUpdate();
  }

  render() {
    return <Provider store={store} key="provider">{this.component}</Provider>;
  }
}
