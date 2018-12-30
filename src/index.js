import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory, createHashHistory, createMemoryHistory } from 'history';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

// import { BrowserRouter  } from 'react-router-dom';
import './index.css';
// import App from './App';
import routes from './routes';

import * as serviceWorker from './serviceWorker';

const browserHistory = createBrowserHistory();

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} >{routes}</Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
