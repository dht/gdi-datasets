import { appStateEvents } from '../nodes-seed/events/node.appStateEvents';
import { events } from '../nodes-seed/events/node.events';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    appStateEvents,
    events,
};

const nodeTypes: Record<string, NodeType> = {
    appStateEvents: 'single',
    events: 'collection',
};

seed(state, nodeTypes);
