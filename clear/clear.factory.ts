import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    appStateFactory: 'single',
    layouts: 'groupedList',
    articles: 'collection',
    articleCategories: 'collection',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
