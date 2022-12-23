import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateDevtools: 'single',
    stores: 'collection',
    nodes: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
