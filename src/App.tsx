import React, { useEffect, useState } from 'react';
import { InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import { ApolloClientService } from './services/apollo-client.service';
import { CachePersistorService } from './services/cache.service';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from './components/menu/menu';
import { Footer } from './components/footer/footer';
import { AppRoutes } from './components/routes';
import './styles/App.css';

const GRAPHQL_URL = 'http://localhost:4000/graphql';

function App() {
    const [apolloClient, setApolloClient] = useState<ApolloClientService>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cachePersistor, setCachePersistor] = useState<CachePersistorService>();

    useEffect(() => {
        const init = async () => {
            const cache = new InMemoryCache();
            const link = new HttpLink({ uri: GRAPHQL_URL });
            const apolloClient = new ApolloClientService(cache, link);
            const cachePersistor = new CachePersistorService(cache);

            await cachePersistor.restore();

            setApolloClient(apolloClient);
            setCachePersistor(cachePersistor);
        };
        init().catch((err) => console.error(err));
    }, []);

    if (!apolloClient) return <h2>Initializating app...</h2>;

    return (
        <div className="container main">
            <ApolloProvider client={apolloClient.client}>
                <Router>
                    <Menu />
                    <AppRoutes />
                    <Footer />
                </Router>
            </ApolloProvider>
        </div>
    );
}

export default App;
