import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createBrowserHistory } from 'history';

import Root from './containers/Root';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
    <Root {...{ history }} />,
    document.getElementById('root'));


console.warn = () => { };

serviceWorker.unregister();
