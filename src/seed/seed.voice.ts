import { appStateVoice } from '../nodes-seed/voice/node.appStateVoice';
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
    appStateVoice,
});

const nodeTypes: Record<string, NodeType> = {
    appStateVoice: 'single',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
