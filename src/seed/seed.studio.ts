import { appStateStudio } from '../nodes-seed/studio/node.appStateStudio';
import { currentIdsStudio } from '../nodes-seed/studio/node.currentIdsStudio';
import { studioBoards } from '../nodes-seed/studio/node.studioBoards';
import { studioCameras } from '../nodes-seed/studio/node.studioCameras';
import { studioExternals } from '../nodes-seed/studio/node.studioExternals';
import { studioGrounds } from '../nodes-seed/studio/node.studioGrounds';
import { studioLights } from '../nodes-seed/studio/node.studioLights';
import { studioMicroAnimations } from '../nodes-seed/studio/node.studioMicroAnimations';
import { studioPacks } from '../nodes-seed/studio/node.studioPacks';
import { studioParticles } from '../nodes-seed/studio/node.studioParticles';
import { studioSounds } from '../nodes-seed/studio/node.studioSounds';
import { studioSprites } from '../nodes-seed/studio/node.studioSprites';
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
    currentIdsStudio,
    studioBoards,
    studioCameras,
    studioExternals,
    studioGrounds,
    studioLights,
    studioMicroAnimations,
    studioPacks,
    studioParticles,
    studioSounds,
    studioSprites,
});

const nodeTypes: Record<string, any> = {
    appStateStudio: 'single',
    currentIdsStudio: 'single',
    studioBoards: 'collection',
    studioCameras: 'collection',
    studioExternals: 'collection',
    studioGrounds: 'collection',
    studioLights: 'collection',
    studioMicroAnimations: 'collection',
    studioPacks: 'collection',
    studioParticles: 'collection',
    studioSounds: 'collection',
    studioSprites: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
