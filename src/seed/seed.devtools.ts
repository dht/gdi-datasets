import { appStateDevtools } from '../nodes-seed/devtools/node.appStateDevtools';
import { nodes } from '../nodes-seed/devtools/node.nodes';
import { stores } from '../nodes-seed/devtools/node.stores';
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
    appStateDevtools,
    nodes,
    stores,
};

const nodeTypes: Record<string, NodeType> = {
    appStateDevtools: 'single',
    stores: 'collection',
    nodes: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
