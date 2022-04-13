import React from 'react';
import { useRoutes } from 'react-router-dom';
import { LandingPage } from './landing-page/landing-page';
import { NotFound } from './not-found/not-found';

export const AppRoutes = () =>
    useRoutes([
        { path: '/', element: <LandingPage /> },
        { path: '/home', element: <LandingPage /> },
        { path: '*', element: <NotFound /> },
    ]);
