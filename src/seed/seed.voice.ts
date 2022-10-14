import { appStateVoice } from '../nodes-seed/voice/node.appStateVoice';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    appStateVoice,
};

const nodeTypes: Record<string, NodeType> = {
    appStateVoice: 'single',
};

seed(state, nodeTypes);
