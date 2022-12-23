import { appStateMixer } from '../nodes-seed/mixer/node.appStateMixer';
import { libraryImages } from '../nodes-seed/mixer/node.libraryImages';
import { libraryPalettes } from '../nodes-seed/mixer/node.libraryPalettes';
import { libraryTypography } from '../nodes-seed/mixer/node.libraryTypography';
import { libraryWidgets } from '../nodes-seed/mixer/node.libraryWidgets';
import { locales } from '../nodes-seed/mixer/node.locales';
import { libraryPageInstances } from '../nodes-seed/mixer/node.libraryPageInstances';
import { libraryInstances } from '../nodes-seed/mixer/node.libraryInstances';
import { libraryInstancesProps } from '../nodes-seed/mixer/node.libraryInstancesProps';
import { libraryPages } from '../nodes-seed/mixer/node.libraryPages';
import { libraryDatasets } from '../nodes-seed/mixer/node.libraryDatasets';
import { packages } from '../nodes-seed/mixer/node.packages';
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
    appStateMixer,
    libraryImages,
    libraryWidgets,
    libraryTypography,
    libraryInstances,
    libraryPalettes,
    libraryPages,
    libraryInstancesProps,
    libraryPageInstances,
    libraryDatasets,
    locales,
    packages,
});

const nodeTypes: Record<string, any> = {
    appStateMixer: 'single',
    libraryImages: 'collection',
    libraryWidgets: 'collection',
    libraryInstances: 'collection',
    libraryTypography: 'collection',
    libraryPalettes: 'collection',
    libraryPages: 'collection',
    libraryInstancesProps: 'collection',
    libraryPageInstances: 'collection',
    libraryDatasets: 'single',
    locales: 'collection',
    packages: 'single',
};

seed(state, nodeTypes, destination, {
    clearNodes: CLEAR,
});
