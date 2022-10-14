import { appStateSales } from '../nodes-seed/sales/node.appStateSales';
import { sales } from '../nodes-seed/sales/node.sales';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    appStateSales,
    sales,
};

const nodeTypes: Record<string, NodeType> = {
    appStateSales: 'single',
    persons: 'collection',
};

seed(state, nodeTypes);
