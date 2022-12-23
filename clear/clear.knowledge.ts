import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateKnowledge: 'single',
    linkCategories: 'collection',
    links: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
