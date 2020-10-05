import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';
import PhotoProvider from '../context/PhotoContext';

export default function RouterMap() {
  return (
    <PhotoProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </PhotoProvider>
  );
}
