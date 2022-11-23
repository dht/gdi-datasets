import { appStateThings } from '../nodes-seed/things/node.appStateThings';
import { things } from '../nodes-seed/things/node.things';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

import { config } from 'dotenv-flow';
import { parseData } from '../utils/parseData';

const CLEAR = false;

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = parseData({
    appStateThings,
    things,
});

const nodeTypes: Record<string, NodeType> = {
    appStateThings: 'single',
    things: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
