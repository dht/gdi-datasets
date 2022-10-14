import { appStateThings } from '../nodes-seed/things/node.appStateThings';
import { things } from '../nodes-seed/things/node.things';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    appStateThings,
    things,
};

const nodeTypes: Record<string, NodeType> = {
    appStateThings: 'single',
    things: 'collection',
};

seed(state, nodeTypes);
