import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    appStateVoice: 'single',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
