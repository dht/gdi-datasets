import { settings } from '../nodes-seed/settings/node.settings';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    settings,
};

const nodeTypes: Record<string, NodeType> = {
    settings: 'single',
};

seed(state, nodeTypes);
