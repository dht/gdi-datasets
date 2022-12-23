import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    settings: 'single',
};
const run = async () => {
    await clear(nodeTypes);
};

run();
