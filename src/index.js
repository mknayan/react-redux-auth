import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

// import { BrowserRouter  } from 'react-router-dom';
import './index.css';
import routes from './routes';

import * as serviceWorker from './serviceWorker';
import history from './history';

// const browserHistory = createBrowserHistory();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} >{routes}</Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
