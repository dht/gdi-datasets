import { appStateTasks } from '../nodes-seed/tasks/node.appStateTasks';
import { projects } from '../nodes-seed/tasks/node.projects';
import { recentSessions } from '../nodes-seed/tasks/node.recentSessions';
import { sessions } from '../nodes-seed/tasks/node.sessions';
import { tickets } from '../nodes-seed/tasks/node.tickets';
import { worklogs } from '../nodes-seed/tasks/node.worklogs';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

import { config } from 'dotenv-flow';

const CLEAR = false;

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = {
    appStateTasks,
    projects,
    recentSessions,
    sessions,
    tickets,
    worklogs,
};

const nodeTypes: Record<string, NodeType> = {
    appStateTasks: 'single',
    worklogs: 'collection',
    recentSessions: 'collection',
    projects: 'collection',
    tickets: 'collection',
    sessions: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
