import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateKnowledge: 'single',
    linkCategories: 'collection',
    links: 'collection',
};

seed(state, nodeTypes);
