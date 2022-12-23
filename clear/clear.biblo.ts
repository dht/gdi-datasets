import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateBiblo: 'single',
    interestingReads: 'collection',
    readCategories: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
