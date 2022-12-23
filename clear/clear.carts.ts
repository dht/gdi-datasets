import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateCarts: 'single',
    cartJournals: 'collection',
    carts: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
