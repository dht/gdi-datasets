import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    appStateSales: 'single',
    sales: 'collection',
};
const run = async () => {
    await clear(nodeTypes);
};

run();
