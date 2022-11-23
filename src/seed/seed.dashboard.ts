import { appStateDashboard } from '../nodes-seed/dashboard/node.appStateDashboard';
import { currentIdsDashboard } from '../nodes-seed/dashboard/node.currentIdsDashboard';
import { inboxMessages } from '../nodes-seed/dashboard/node.inboxMessages';
import { stats } from '../nodes-seed/dashboard/node.stats';
import { statsJourneys } from '../nodes-seed/dashboard/node.statsJourneys';
import { initFirebase } from '../utils/firestore';
import { seed } from '@gdi/store-seeder';

import { config } from 'dotenv-flow';
import { parseData } from '../utils/parseData';

const CLEAR = false;

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = parseData({
    currentIdsDashboard,
    appStateDashboard,
    stats,
    statsJourneys,
    inboxMessages,
});

const nodeTypes: Record<string, NodeType> = {
    currentIdsDashboard: 'single',
    appStateDashboard: 'single',
    stats: 'collection',
    statsJourneys: 'collection',
    inboxMessages: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
