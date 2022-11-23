import { appStateSales } from '../nodes-seed/sales/node.appStateSales';
import { sales } from '../nodes-seed/sales/node.sales';
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
    appStateSales,
    sales,
});

const nodeTypes: Record<string, NodeType> = {
    appStateSales: 'single',
    sales: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
