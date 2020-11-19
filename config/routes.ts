import { IRoute } from '@umijs/core';

export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/index',
    name: 'home',
    component: './Home',
  },
  {
    path: 'utils',
    name: 'utils',
    icon: 'aim',
    routes: [
      {
        path: 'StompClient',
        name: 'StompClient',
        component: './StompClient',
      },
      {
        path: 'JsonView',
        name: 'JsonView',
        component: './JsonView',
      },
      {
        path: 'Highlight',
        name: 'Highlight',
        component: './Highlight',
      },
    ],
  },
  {
    path: '/',
    redirect: '/index',
  },
  {
    component: './404',
  },
] as IRoute[];
