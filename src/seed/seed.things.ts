import { appStateThings } from '../nodes-seed/things/node.appStateThings';
import { things } from '../nodes-seed/things/node.things';
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
    appStateThings,
    things,
};

const nodeTypes: Record<string, NodeType> = {
    appStateThings: 'single',
    things: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
