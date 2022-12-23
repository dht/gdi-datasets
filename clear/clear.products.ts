import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateProducts: 'single',
    products: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
