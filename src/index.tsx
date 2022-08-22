import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './app/apollo';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
