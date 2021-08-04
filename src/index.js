import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.10.0';

// pages
import Components from 'views/Components/Components.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import NotFoundPage from './views/NotFoundPage';
import Home from "./views/Home/Home";
import RedirectPage from "./views/RedirectPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/redirect" component={RedirectPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/components" component={Components} />
      <Redirect exact from="/" to="/landing-page" />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
