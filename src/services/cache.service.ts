import { InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { CachePersistor, LocalStorageWrapper } from 'apollo3-cache-persist';

export class CachePersistorService {
    private readonly persistor: CachePersistor<NormalizedCacheObject>;

    constructor(cache: InMemoryCache) {
        this.persistor = new CachePersistor({
            cache,
            storage: new LocalStorageWrapper(localStorage),
            debug: true,
        });
    }

    restore = async () => this.persistor.restore();

    clear = () => {
        if (!this.persistor) return;
        this.persistor.purge();
    };
}
