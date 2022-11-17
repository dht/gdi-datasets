import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
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

const run = async () => {
    await clear(nodeTypes);
};

run();
