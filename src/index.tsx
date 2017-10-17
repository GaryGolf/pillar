import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import main from './containers/main';

const container =  document.getElementById('layout');
const render = component => ReactDOM.render(component, container);

main.then(render);




