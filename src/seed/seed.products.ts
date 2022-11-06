import { appStateProducts } from '../nodes-seed/products/node.appStateProducts';
import { products } from '../nodes-seed/products/node.products';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

import { config } from 'dotenv-flow';

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = {
    appStateProducts,
    products,
};

const nodeTypes: Record<string, NodeType> = {
    appStateProducts: 'single',
    products: 'collection',
};

seed(state, nodeTypes, destination);
