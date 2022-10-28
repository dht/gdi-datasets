import { appStateLeads } from '../nodes-seed/leads/node.appStateLeads';
import { leads } from '../nodes-seed/leads/node.leads';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    appStateLeads,
    leads,
};

const nodeTypes: Record<string, NodeType> = {
    appStateLeads: 'single',
    leads: 'groupedList',
};

seed(state, nodeTypes);
