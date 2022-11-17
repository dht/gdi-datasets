import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    currentIdsDashboard: 'single',
    appStateDashboard: 'single',
    stats: 'collection',
    statsJourneys: 'collection',
    inboxMessages: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
