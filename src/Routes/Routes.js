import React from 'react';
import Auth from './Pages/Auth';
import Main from './Pages/Main';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Main />,
    protected: 'auth',
  },
  {
    path: '/auth',
    exact: true,
    component: () => <Auth />,
    protected: 'guest',
  },
];
