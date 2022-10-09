import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateSales: 'single',
    persons: 'collection',
};

seed(state, nodeTypes);
