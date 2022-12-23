import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStatePpl: 'single',
    persons: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
