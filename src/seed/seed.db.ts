import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateDeb: 'single',
    posts: 'groupedList',
    highlights: 'collection',
    postAuthors: 'collection',
};

seed(state, nodeTypes);
