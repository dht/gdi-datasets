import { appStateVoice } from '../nodes-seed/voice/node.appStateVoice';
import { seed } from '@gdi/store-seeder';

const state = {
    appStateVoice,
};

const nodeTypes: Record<string, NodeType> = {
    appStateVoice: 'single',
};

seed(state, nodeTypes);
