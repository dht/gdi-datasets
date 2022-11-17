import { clear } from './_base';

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
    datasets: 'single',
    packages: 'single',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
