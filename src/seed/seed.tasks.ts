import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateTasks: 'single',
    worklogs: 'collection',
    recentSessions: 'collection',
    projects: 'collection',
    tickets: 'collection',
    sessions: 'collection',
};

seed(state, nodeTypes);
