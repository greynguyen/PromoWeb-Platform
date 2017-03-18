import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/app';

const history = createBrowserHistory()
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const routes = (
  <div className="app">
    <Router history={history}>
      <MuiThemeProvider>
        <Route path="/" component={App} />
      </MuiThemeProvider>
    </Router>
  </div>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.container'));
});
