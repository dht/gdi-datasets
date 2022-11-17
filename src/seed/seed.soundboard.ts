import { actualManas } from '../nodes-seed/soundboard/node.actualManas';
import { appStateScheduler } from '../nodes-seed/soundboard/node.appStateScheduler';
import { appStateSoundboard } from '../nodes-seed/soundboard/node.appStateSoundboard';
import { expectedManas } from '../nodes-seed/soundboard/node.expectedManas';
import { scheduleBlocks } from '../nodes-seed/soundboard/node.scheduleBlocks';
import { scheduleSessions } from '../nodes-seed/soundboard/node.scheduleSessions';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

import { config } from 'dotenv-flow';

const CLEAR = false;

config();

const destination = process.env.DESTINATION || 'FIREBASE';

if (destination === 'FIREBASE') {
    initFirebase();
}

const state = {
    actualManas,
    appStateScheduler,
    appStateSoundboard,
    expectedManas,
    scheduleBlocks,
    scheduleSessions,
};

const nodeTypes: Record<string, NodeType> = {
    appStateSoundboard: 'single',
    appStateScheduler: 'single',
    actualManas: 'collection',
    expectedManas: 'collection',
    scheduleBlocks: 'collection',
    scheduleSessions: 'collection',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
