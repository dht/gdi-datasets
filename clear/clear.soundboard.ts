import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateSoundboard: 'single',
    appStateScheduler: 'single',
    actualManas: 'collection',
    expectedManas: 'collection',
    scheduleBlocks: 'collection',
    scheduleSessions: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
