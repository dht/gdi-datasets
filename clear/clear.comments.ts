import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateComments: 'single',
    comments: 'groupedList',
    pendingComments: 'groupedList',
};

const run = async () => {
    await clear(nodeTypes);
};

run();
