import { clear } from './_base';

const nodeTypes: Record<string, NodeType> = {
    appStateLeads: 'single',
    leads: 'groupedList',
};
const run = async () => {
    await clear(nodeTypes);
};

run();
