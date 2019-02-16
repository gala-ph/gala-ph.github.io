import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import App from './App';
import Events from './Events';
import Faqs from './Faqs';

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path={`/`} component={App} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/faqs" component={Faqs} />
        </div>
    </HashRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
