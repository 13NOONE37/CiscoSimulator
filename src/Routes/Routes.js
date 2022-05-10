import React from 'react';
import Auth from 'Routes/Pages/Auth';
import Main from 'Routes/Pages/Main';

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
