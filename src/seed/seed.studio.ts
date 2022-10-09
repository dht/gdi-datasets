import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateStudio: 'single',
    boards: 'collection',
    buildings: 'collection',
    assets: 'collection',
    cameras: 'collection',
    grounds: 'collection',
    lights: 'collection',
    particles: 'collection',
    studioItems: 'collection',
};

seed(state, nodeTypes);
