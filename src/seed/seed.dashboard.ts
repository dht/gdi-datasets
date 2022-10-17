import { dashboard } from '../nodes-seed/dashboard/node.dashboard';
import { stats } from '../nodes-seed/dashboard/node.stats';
import { statsJourneys } from '../nodes-seed/dashboard/node.statsJourneys';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    dashboard,
    stats,
    statsJourneys,
};

const nodeTypes: Record<string, NodeType> = {
    dashboard: 'single',
    stats: 'collection',
    statsJourneys: 'collection',
};

seed(state, nodeTypes);
