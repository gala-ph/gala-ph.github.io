import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Events from './Events';
import Faqs from './Faqs';

class First extends Component {
    render() {
        return (
            <div>
                <Route exact path={`/`} component={App} />
                <Route path={`/#/events`} render={ (routerProps) => < Events routerProps={routerProps} />} />
                <Route path={`/#/faqs`} render={ (routerProps) => < Faqs routerProps={routerProps} />} />
            </div>
        );
    }
}

export default First;