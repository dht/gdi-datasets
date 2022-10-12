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

const state = {
    appStateStudio,
    assets,
    boards,
    buildings,
    cameras,
    grounds,
    lights,
    particles,
    studioItems,
};

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

seed(state, nodeTypes);
