import { ReactNode } from 'react';
import { HomeScreen } from '../screens/home-screen';
import React  from 'react';

export const allRoutes: { path: string; element: ReactNode; exact?: boolean }[] = [
  {
    path: '/',
    element: <HomeScreen />, 
    exact: true,
  },
];
