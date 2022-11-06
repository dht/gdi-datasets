import { appStateEvents } from '../nodes-seed/events/node.appStateEvents';
import { events } from '../nodes-seed/events/node.events';
import { reminders } from '../nodes-seed/events/node.reminders';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

import { config } from 'dotenv-flow';

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = {
    appStateEvents,
    events,
    reminders,
};

const nodeTypes: Record<string, NodeType> = {
    appStateEvents: 'single',
    events: 'collection',
    reminders: 'collection',
};

seed(state, nodeTypes, destination);
