import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.10.0';

// pages
import Components from 'views/Components/Components.js';
import NotFoundPage from './views/NotFoundPage';
import Home from './views/Home/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/components" component={Components} />
      <Redirect exact from="/" to="/home" />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
