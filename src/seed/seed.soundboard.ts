import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateSoundboard: 'single',
    appStateScheduler: 'single',
    actualManas: 'collection',
    expectedManas: 'collection',
    scheduleBlocks: 'collection',
    scheduleSessions: 'collection',
    weatherLocations: 'collection',
    weatherHourlyItems: 'collection',
    weatherDailyItems: 'collection',
};

seed(state, nodeTypes);
