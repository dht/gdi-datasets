import { appStateCarts } from '../nodes-seed/carts/node.appStateCarts';
import { cartJournals } from '../nodes-seed/carts/node.cartJournals';
import { carts } from '../nodes-seed/carts/node.carts';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

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

seed(state, nodeTypes);
