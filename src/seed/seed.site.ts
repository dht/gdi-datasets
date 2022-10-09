import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    meta: 'single',
    palette: 'single',
    fonts: 'single',
    instances: 'collection',
    breakpoints: 'collection',
    widgets: 'collection',
    images: 'collection',
    pages: 'collection',
    instancesProps: 'collection',
};

seed(state, nodeTypes);
