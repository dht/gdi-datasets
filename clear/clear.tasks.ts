import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    appStateTasks: 'single',
    worklogs: 'collection',
    recentSessions: 'collection',
    projects: 'collection',
    tickets: 'collection',
    sessions: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
