import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateThings: 'single',
    things: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
