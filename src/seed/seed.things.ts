import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateThings: 'single',
    things: 'collection',
};

seed(state, nodeTypes);
