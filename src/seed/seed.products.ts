import { appStateProducts } from '../nodes-seed/products/node.appStateProducts';
import { products } from '../nodes-seed/products/node.products';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    appStateProducts,
    products,
};

const nodeTypes: Record<string, NodeType> = {
    appStateProducts: 'single',
    products: 'collection',
};

seed(state, nodeTypes);
