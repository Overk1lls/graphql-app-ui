import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { RouteNames } from '../components/AppRouter';

const NotFoundPage = () => {
  const location = useLocation();

  return (
    <div className="container main">
      <div className="text-center">
        <h1> "Page "{location.pathname}" is not found (404)</h1>
        <Button className="m-3 back-button" variant="contained" href={RouteNames.Home}>
          Return Back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
