import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { config } from './config';

export const cache = new InMemoryCache();
export const link = new HttpLink({ uri: config.baseUrl });
export const apolloClient = new ApolloClient({
  cache,
  link,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
