import React from 'react';
import { useRoutes } from 'react-router-dom';
import { LandingPage } from './landing-page/landing-page';
import { NotFound } from './not-found/not-found';
import { User } from './user-page/user';

export const AppRoutes = () =>
    useRoutes([
        { path: '/', element: <LandingPage /> },
        { path: '/home', element: <LandingPage /> },
        { path: '/user/:id', element: <User /> },
        { path: '*', element: <NotFound /> },
    ]);
