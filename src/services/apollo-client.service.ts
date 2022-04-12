import {
    InMemoryCache,
    ApolloClient,
    HttpLink,
    NormalizedCacheObject,
} from '@apollo/client'

export class ApolloClientService {
    private readonly apolloClient: ApolloClient<NormalizedCacheObject>

    constructor(private readonly cache: InMemoryCache, private readonly link: HttpLink) {
        this.cache = cache
        this.apolloClient = new ApolloClient({
            cache: this.cache,
            link,
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'cache-and-network',
                },
            },
        })
    }

    public get client(): ApolloClient<NormalizedCacheObject> {
        return this.apolloClient
    }
}
