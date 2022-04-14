import React from 'react';
import { useRoutes } from 'react-router-dom';
import { AboutUs } from './about-us/about-us';
import { LandingPage } from './landing-page/landing-page';
import { UserTable } from './landing-page/user-table/user-table';
import { NotFound } from './not-found/not-found';
import { User } from './user-page/user';

export const AppRoutes = () =>
    useRoutes([
        { path: '/', element: <LandingPage /> },
        { path: '/home', element: <LandingPage /> },
        { path: '/users', element: <UserTable /> },
        { path: '/users/:id', element: <User /> },
        { path: '/about-us', element: <AboutUs /> },
        { path: '*', element: <NotFound /> },
    ]);
