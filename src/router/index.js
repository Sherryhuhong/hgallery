import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';

export default function RouterMap() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
