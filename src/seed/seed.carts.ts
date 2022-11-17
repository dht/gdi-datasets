import { appStateCarts } from '../nodes-seed/carts/node.appStateCarts';
import { cartJournals } from '../nodes-seed/carts/node.cartJournals';
import { carts } from '../nodes-seed/carts/node.carts';
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
    appStateCarts,
    cartJournals,
    carts,
};

const nodeTypes: Record<string, NodeType> = {
    appStateCarts: 'single',
    cartJournals: 'collection',
    carts: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
