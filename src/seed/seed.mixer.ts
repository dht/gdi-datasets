import { appStateMixer } from '../nodes-seed/mixer/node.appStateMixer';
import { libraryImages } from '../nodes-seed/mixer/node.libraryImages';
import { libraryPalettes } from '../nodes-seed/mixer/node.libraryPalettes';
import { libraryTypography } from '../nodes-seed/mixer/node.libraryTypography';
import { libraryWidgets } from '../nodes-seed/mixer/node.libraryWidgets';
import { locales } from '../nodes-seed/mixer/node.locales';
import { libraryPageInstances } from '../nodes-seed/mixer/node.libraryPageInstances';
import { libraryInstances } from '../nodes-seed/mixer/node.libraryInstances';
import { libraryInstancesProps } from '../nodes-seed/mixer/node.libraryInstancesProps';
import { packages } from '../nodes-seed/mixer/node.packages';
import { libraryPages } from '../nodes-seed/mixer/node.libraryPages';
import { seed } from '@gdi/store-seeder';
import { initFirebase } from '../utils/firestore';

initFirebase();

const state = {
    appStateMixer,
    libraryImages,
    libraryWidgets,
    libraryTypography,
    libraryInstances,
    libraryPalettes,
    libraryPages,
    libraryInstancesProps,
    libraryPageInstances,
    locales,
    packages,
};

const nodeTypes: Record<string, NodeType> = {
    appStateMixer: 'single',
    libraryImages: 'collection',
    libraryWidgets: 'collection',
    libraryInstances: 'collection',
    libraryTypography: 'collection',
    libraryPalettes: 'collection',
    libraryPages: 'collection',
    libraryInstancesProps: 'collection',
    libraryPageInstances: 'collection',
    locales: 'collection',
    packages: 'single',
};

seed(state, nodeTypes);
