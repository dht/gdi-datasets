import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateEvents: 'single',
    events: 'collection',
};

seed(state, nodeTypes);
