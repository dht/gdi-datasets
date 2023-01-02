import { business } from '../nodes-seed/business/node.business';
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
    business,
});

const nodeTypes: Record<string, any> = {
    business: 'single',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
