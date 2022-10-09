import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateDevtools: 'single',
    stores: 'collection',
    nodes: 'collection',
};

seed(state, nodeTypes);
