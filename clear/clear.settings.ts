import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    settings: 'single',
};
const run = async () => {
    await clear(nodeTypes);
};

run();
