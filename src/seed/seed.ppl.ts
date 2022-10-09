import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStatePpl: 'single',
    persons: 'collection',
};

seed(state, nodeTypes);
