import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateBiblo: 'single',
    interestingReads: 'collection',
    readCategories: 'collection',
};

seed(state, nodeTypes);
