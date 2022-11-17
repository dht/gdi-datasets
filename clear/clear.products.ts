import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    appStateProducts: 'single',
    products: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
