import { appStateLeads } from '../nodes-seed/leads/node.appStateLeads';
import { leads } from '../nodes-seed/leads/node.leads';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';
import { config } from 'dotenv-flow';
import { parseData } from '../utils/parseData';

const CLEAR = false;

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = parseData({
    appStateLeads,
    leads,
});

const nodeTypes: Record<string, NodeType> = {
    appStateLeads: 'single',
    leads: 'groupedList',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
