import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    appStateComments: 'single',
    comments: 'groupedList',
    pendingComments: 'groupedList',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
