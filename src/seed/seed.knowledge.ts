import { appStateKnowledge } from '../nodes-seed/knowledge/node.appStateKnowledge';
import { linkCategories } from '../nodes-seed/knowledge/node.linkCategories';
import { links } from '../nodes-seed/knowledge/node.links';
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
    appStateKnowledge,
    linkCategories,
    links,
};

const nodeTypes: Record<string, NodeType> = {
    appStateKnowledge: 'single',
    linkCategories: 'collection',
    links: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
