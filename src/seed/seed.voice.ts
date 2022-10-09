import { state } from './state';
import { seed } from '@gdi/store-seeder';

const nodeTypes = {
    appStateVoice: 'single',
};

seed(state, nodeTypes);
