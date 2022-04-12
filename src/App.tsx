import React, { useEffect, useState } from 'react'
import { InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client'
import { ApolloClientService } from './services/apollo-client.service'
import { CachePersistorService } from './services/cache.service'
import './styles/App.css'

const GRAPHQL_URL = 'http://localhost:4000/graphql'

function App() {
    const [apolloClient, setApolloClient] = useState<ApolloClientService>()
    const [cachePersistor, setCachePersistor] = useState<CachePersistorService>()

    useEffect(() => {
        const init = async () => {
            const cache = new InMemoryCache()
            const link = new HttpLink({ uri: GRAPHQL_URL })
            const apolloClient = new ApolloClientService(cache, link)
            const cachePersistor = new CachePersistorService(cache)

            await cachePersistor.restore()

            setCachePersistor(cachePersistor)
            setApolloClient(apolloClient)
        }
        init().catch((err) => console.error(err))
    }, [])

    if (!apolloClient) return <h2>Initializating app...</h2>

    return (
        <ApolloProvider client={apolloClient.client}>
            <h2 className={'text-center'}>Hello</h2>
        </ApolloProvider>
    )
}

export default App
