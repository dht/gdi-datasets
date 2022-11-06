import { appStateMoney } from '../nodes-seed/money/node.appStateMoney';
import { moneyBehaviors } from '../nodes-seed/money/node.moneyBehaviors';
import { moneyLines } from '../nodes-seed/money/node.moneyLines';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

import { config } from 'dotenv-flow';

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = {
    appStateMoney,
    moneyBehaviors,
    moneyLines,
};

const nodeTypes: Record<string, NodeType> = {
    appStateMoney: 'single',
    moneyLines: 'collection',
    moneyBehaviors: 'collection',
};

seed(state, nodeTypes, destination);
