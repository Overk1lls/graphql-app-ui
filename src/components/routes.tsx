import React from 'react';
import { useRoutes } from 'react-router-dom';
import { AboutUs } from './about-us/about-us';
import { LandingPage } from './landing-page/landing-page';
import { NotFound } from './not-found/not-found';
import { User } from './user-page/user';

export const AppRoutes = () =>
    useRoutes([
        { path: '/users/:id', element: <User /> },
        { path: '/about-us', element: <AboutUs /> },
        { path: '/', element: <LandingPage /> },
        { path: '*', element: <NotFound /> },
    ]);
