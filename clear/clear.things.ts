import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    appStateThings: 'single',
    things: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
