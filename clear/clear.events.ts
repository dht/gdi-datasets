import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    appStateEvents: 'single',
    events: 'collection',
    reminders: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
