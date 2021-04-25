import * as React from 'react';
import { Route, Switch } from 'react-router';
import { About, Contact, Home } from '../pages';

export const Router = () => (
  <Switch>
    <Route exact path="/"><Home /></Route>
    <Route exact path="/About"><About /></Route>
    <Route exact path="/Contact"><Contact /></Route>
  </Switch>
);

export default Router;

Router.displayName = 'Router';
