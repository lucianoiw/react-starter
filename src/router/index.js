import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import PokemonDetails from '../pages/PokemonDetails';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/:slug',
    component: PokemonDetails,
  },
  {
    component: NotFound,
  },
];

export default () => (
  <Switch>
    {routes.map(route => (
      <Route key={route.path || 'notfound'} {...route} />
    ))}
  </Switch>
);
