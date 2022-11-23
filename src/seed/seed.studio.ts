import { appStateStudio } from '../nodes-seed/studio/node.appStateStudio';
import { assets } from '../nodes-seed/studio/node.assets';
import { boards } from '../nodes-seed/studio/node.boards';
import { buildings } from '../nodes-seed/studio/node.buildings';
import { cameras } from '../nodes-seed/studio/node.cameras';
import { grounds } from '../nodes-seed/studio/node.grounds';
import { lights } from '../nodes-seed/studio/node.lights';
import { particles } from '../nodes-seed/studio/node.particles';
import { studioItems } from '../nodes-seed/studio/node.studioItems';
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
    appStateStudio,
    assets,
    boards,
    buildings,
    cameras,
    grounds,
    lights,
    particles,
    studioItems,
});

const nodeTypes: Record<string, NodeType> = {
    appStateStudio: 'single',
    boards: 'collection',
    buildings: 'collection',
    assets: 'collection',
    cameras: 'collection',
    grounds: 'collection',
    lights: 'collection',
    particles: 'collection',
    studioItems: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
