import { settings } from '../nodes-seed/settings/node.settings';
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
    settings,
});

const nodeTypes: Record<string, any> = {
    settings: 'single',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
