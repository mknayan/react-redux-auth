import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Greetings from './components/Greetings';
import SignupPage from './components/SignupPage';

export default (
    <div className="container">
        <Route path="/" component={App} />
        <Route path="/" exact component={Greetings} />
        <Route path="/signup" component={SignupPage} />
    </div>
    
)