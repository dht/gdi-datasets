import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateVoice: 'single',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
