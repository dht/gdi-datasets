import { settings } from '../nodes-seed/settings/node.settings';
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
    settings,
};

const nodeTypes: Record<string, NodeType> = {
    settings: 'single',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
