import * as React from 'react';
import * as ReactDOM from 'react-dom';

import main from './containers/main';

const container =  document.getElementById('layout');
main.then((component:JSX.Element) => {
  ReactDOM.render(component, container);
});



