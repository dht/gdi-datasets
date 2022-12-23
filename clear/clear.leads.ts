import { clear } from './_base';

const nodeTypes: Record<string, any> = {
    appStateLeads: 'single',
    leads: 'groupedList',
};
const run = async () => {
    await clear(nodeTypes);
};

run();
