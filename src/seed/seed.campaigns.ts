import { appStateCampaigns } from '../nodes-seed/campaigns/node.appStateCampaigns';
import { campaigns } from '../nodes-seed/campaigns/node.campaigns';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

import { config } from 'dotenv-flow';

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = {
    appStateCampaigns,
    campaigns,
};

const nodeTypes: Record<string, NodeType> = {
    appStateCampaigns: 'single',
    campaigns: 'collection',
};

seed(state, nodeTypes, destination);
