import { appStateBiblo } from '../nodes-seed/biblo/node.appStateBiblo';
import { interestingReads } from '../nodes-seed/biblo/node.interestingReads';
import { readCategories } from '../nodes-seed/biblo/node.readCategories';
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
    appStateBiblo,
    interestingReads,
    readCategories,
};

const nodeTypes: Record<string, NodeType> = {
    appStateBiblo: 'single',
    interestingReads: 'collection',
    readCategories: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
