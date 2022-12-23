import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateSales: 'single',
    sales: 'collection',
};
const run = async () => {
    await clear(nodeTypes);
};

run();
