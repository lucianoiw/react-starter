import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '@Containers/PrivateRoute';
import Loading from '@Components/Loading';

const Home = Loadable({ loader: () => import('@Pages/Home'), loading: Loading });
const PokemonDetails = Loadable({ loader: () => import('@Pages/PokemonDetails'), loading: Loading });
const NotFound = Loadable({ loader: () => import('@Pages/NotFound'), loading: Loading });
const Login = Loadable({ loader: () => import('@Containers/Login'), loading: Loading });

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/users/:id',
    component: PokemonDetails,
    private: true,
  },
  {
    component: NotFound,
  },
];

export default () => (
  <Switch>
    {routes.map((route) => {
      if (route.private) {
        return (
          <PrivateRoute key={route.path} {...route} />
        );
      }

      return (
        <Route key={route.path || 'notfound'} {...route} />
      );
    })}
  </Switch>
);
