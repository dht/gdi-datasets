import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    appStateKnowledge: 'single',
    linkCategories: 'collection',
    links: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
