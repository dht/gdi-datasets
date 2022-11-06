import { appStatePpl } from '../nodes-seed/ppl/node.appStatePpl';
import { persons } from '../nodes-seed/ppl/node.persons';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';
import { config } from 'dotenv-flow';

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = {
    appStatePpl,
    persons,
};

const nodeTypes: Record<string, NodeType> = {
    appStatePpl: 'single',
    persons: 'collection',
};

console.log('destination ->', destination);

seed(state, nodeTypes, destination);
